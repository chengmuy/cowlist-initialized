const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Hello World!"));

router.get("/api/cows", (req, res) => {
  res.send("You're gonna get all the cows");
  console.log("req body >>> ", req.body);
});

router.post("/api/cows", (req, res) => res.send("You're gonna gimme a cow"));

module.exports = router;
