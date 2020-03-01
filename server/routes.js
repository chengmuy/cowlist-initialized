const express = require("express");
const router = express.Router();
const controllers = require("./controllers/controllers.js");

router.get("/api/cows", controllers.cows.get);

router.post("/api/cows", controllers.cows.post);

module.exports = router;
