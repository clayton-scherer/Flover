const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const entreeRouter = require("./routes/entree-router");
const app = express();
require("./models/db");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/entrees", entreeRouter);

module.exports = app;
