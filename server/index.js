const express = require("express");
const parser = require("body-parser");
const morgan = require("morgan");

const router = require("./routes.js");

const app = express();
const port = 3001;

/* Set up Middleware */
app.use(morgan("dev"));
app.use(express.static("./client/dist"));
app.use(parser.json());
app.use(router);

/* Start the server */
app.listen(port, () => console.log(`app listening on port ${port}!`));
