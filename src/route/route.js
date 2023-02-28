const express = require("express");

const router = express.Router();

const controller = require("../controller/blog");

router.get("/", (req,res) => {
    res.send("초기 화면입니가 /home or /state or /widget or /package 로 가주세요.");
});

router.get("/home", controller.home);

router.get("/state",controller.state);

router.get("/widget",controller.widget);

router.get("/libs",controller.package);

module.exports = router;
