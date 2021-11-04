const { Router } = require("express");
const auth = require("../auth/middleware");
const Space = require("../models").space;
const User = require("../models").user;
// const Review = require("../models").review;

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
      include: {
        model: User,
        include: {
          model: User,
          as: "reviewed",
          through: {
            attributes: [],
          },
        },
      },
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

router.patch("/:id", auth, async (req, res) => {
  try {
    const space = await Space.findByPk(req.params.id);
    if (!space.userId === req.user.id) {
      return res
        .status(403)
        .send({ message: "You are not authorized to update this space" });
    }

    const { title, description, type, logoUrl, price } = req.body;
    console.log("the body", req.body);
    await space.update({ title, description, type, logoUrl, price });

    return res.status(200).send({ space });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
