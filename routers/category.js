const { Router } = require("express");
const Category = require("../models/").category;
const Service = require("../models").service;
const Space = require("../models").space;
const spaceService = require("../models").spaceService;

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
    // console.log("category id", categoryId);
    const category = await Category.findByPk(categoryId, {
      include: {
        model: Service,
        include: { model: Space, through: { attributes: [] } },
      },
    });

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
