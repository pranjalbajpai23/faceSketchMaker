/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const pushHandler= require("../controllers/pushController");

router.post("/", pushHandler.handlePush);

module.exports = router;