const { Router } = require("express");
const auth = require("../auth/middleware");
const Review = require("../models").review;
const User = require("../models").user;
const Space = require("../models").space;

const router = new Router();
router.get("/", async (req, res, next) => {
  try {
    const reviews = await Review.findAll();
    res.status(200).send({ message: "ok", reviews });
    // console.log("all spaces are here?", reviews);
  } catch (e) {
    next(e);
  }
});

// router.get("/:id", async (req, res, next) => {
//   try {
//     const reviewId = parseInt(req.params.id);
//     const review = await Review.findByPk(reviewId, {
//       include: [{ model: User, as: "reviewed" }],
//     });
//     // console.log("do I get review?", review);
//     if (review) {
//       res.send(review);
//     } else {
//       res.status(404).send({ message: "Review not found" });
//     }
//   } catch (e) {
//     next(e);
//   }
// });

module.exports = router;
