const { Router } = require("express");
const auth = require("../auth/middleware");
const router = new Router();
const Service = require("../models").service;

router.get("/", async (req, res, next) => {
  try {
    const services = await Service.findAll();
    res.status(200).send({ message: "ok", services });
    // console.log("all spaces are here?", services);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
