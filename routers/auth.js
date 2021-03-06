const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Space = require("../models/").space;
const Address = require("../models/").address;
const { SALT_ROUNDS } = require("../config/constants");
const { sendEmail } = require("../lib/email");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({
      where: { email },
      include: { model: Space },
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName, isService, image } = req.body;

  if (!email || !password || !firstName || !lastName) {
    return res
      .status(400)
      .send({ message: "Please provide an email, password and a name" });
  }
  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      firstName,
      lastName,
      isService,
    });
    const newUserId = parseInt(newUser.dataValues.id);
    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });
    // console.log(token);
    // console.log("I get here with ", newUser.dataValues);
    // console.log(newUser);

    console.log("hello ", newUser);
    const createdSpace = await Space.create({
      title: `${firstName}'s Space`,
      userId: newUserId,
      serviceId: null,
      description: null,
      logoUrl: image,
      price: null,
    });
    console.log("space ", createdSpace);

    const createdAddress = await Address.create({
      street: null,
      number: null,
      postCode: null,
      city: null,
      country: null,
      lng: null,
      lat: null,
      spaceId: createdSpace.id,
    });

    console.log("address ", createdAddress);

    return res.status(201).json({
      token,
      ...newUser.dataValues,
      space: { ...createdSpace.dataValues },
    });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }
    console.log(error.message);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// add auth middleware later
router.post("/email", async (req, res, next) => {
  try {
    console.log("hello from route", req.body);
    // get user.id from token/middleware
    // find user in database and get his name + email.
    const userEmail = req.body.userEmail;
    const spaceUserEmail = req.body.spaceUserEmail;
    const userName = req.body.name;

    // message comes from req.body;
    const message = req.body.message;

    const result = await sendEmail(
      userEmail,
      spaceUserEmail,
      userName,
      message
    );
    console.log("result is here?", result);
    return res.status(200).send({ message: "Email sent" });
  } catch (e) {
    next(e);
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  const space = await Space.findOne({ where: { userId: req.user.id } });

  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues, space });
});

module.exports = router;
