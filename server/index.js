const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

/* Set up Middleware */
app.use(express.static("./client/dist"));
app.use(bodyParser.json());

/* Set up Routes */
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/api/cows", (req, res) => {
  res.send("You're gonna get all the cows");
  console.log("req body >>> ", req.body);
});

app.post("/api/cows", (req, res) => res.send("You're gonna gimme a cow"));

/* Start the server */
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
