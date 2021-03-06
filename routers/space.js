const { Router } = require("express");
const auth = require("../auth/middleware");
const Space = require("../models").space;
const Address = require("../models").address;
const User = require("../models").user;
const Review = require("../models").review;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const spaces = await Space.findAll();
    res.status(200).send({ message: "ok", spaces });
    // console.log("all spaces are here?", spaces);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const spaceId = parseInt(req.params.id);
    const space = await Space.findByPk(spaceId, {
      include: [
        {
          model: User,
          include: {
            model: User,
            as: "author",
            through: {
              attributes: [],
            },
          },
        },
        { model: Review },
      ],
    });
    // console.log("do I get space?", space);
    if (space) {
      res.send(space);
    } else {
      res.status(404).send({ message: "Space not found" });
    }
  } catch (e) {
    next(e);
  }
});

// edit my space
// edit the address
router.patch("/:id", auth, async (req, res) => {
  try {
    const a = await Address.findOne({
      where: { spaceId: parseInt(req.params.id) },
    });
    console.log("we are here", { spaceId: parseInt(req.params.id) }, a);
    // include address table
    const [space, address] = await Promise.all([
      Space.findByPk(req.params.id),
      Address.findOne({ where: { spaceId: parseInt(req.params.id) } }),
    ]);

    if (!space.userId === req.user.id) {
      return res
        .status(403)
        .send({ message: "You are not authorized to update this space" });
    }
    console.log("space", space);
    const {
      title,
      description,
      serviceId,
      logoUrl,
      price,
      street,
      number,
      postCode,
      city,
      country,
      lng,
      lat,
    } = req.body;
    console.log("this is body of information", req.body);
    // const updatedSpace = await space.update({
    //   title,
    //   description,
    //   serviceId,
    //   logoUrl,
    //   price,
    //   street,
    //   number,
    //   postCode,
    //   city,
    //   country,
    //   lng,
    //   lat,
    // });

    const [updatedSpace, updatedAddress] = await Promise.all([
      space.update({ title, description, serviceId, logoUrl, price }),
      address.update({ street, number, postCode, city, country, lng, lat }),
    ]);

    return res.status(200).send(updatedSpace);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
