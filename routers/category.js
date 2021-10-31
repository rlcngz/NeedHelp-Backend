const { Router } = require("express");
const Category = require("../models/").category;
const authMiddleware = require("../auth/middleware");
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.status(200).send({ message: "ok", categories });
    console.log("all categories are here?", categories);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
