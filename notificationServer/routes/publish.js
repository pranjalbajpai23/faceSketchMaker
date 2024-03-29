/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const publishHandler= require("../controllers/publishHandler");

router.get("/", publishHandler.handlePublish);

module.exports = router;