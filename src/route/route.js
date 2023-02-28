const express = require("express");

const router = express.Router();

const controller = require("../controller/blog");

router.get("/home", controller.home);

router.get("/state",controller.state);

router.get("/widget",controller.widget);

router.get("/package",controller.package);

module.exports = router;
