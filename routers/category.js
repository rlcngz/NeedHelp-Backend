const { Router } = require("express");
const Category = require("../models/").category;

const Service = require("../models").service;
const authMiddleware = require("../auth/middleware");
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.status(200).send({ message: "ok", categories });
    // console.log("all categories are here?", categories);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const categoryId = parseInt(req.params.id);
    const category = await Category.findByPk(categoryId, { include: Service });
    if (category) {
      res.send(category);
    } else {
      res.status(404).send({ message: "category not found" });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
