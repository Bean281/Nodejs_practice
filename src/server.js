const express = require("express");
import configViewEngine from "./configs/viewEngine";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

configViewEngine(app);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
