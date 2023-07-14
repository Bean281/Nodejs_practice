const express = require("express");
const app = express();
const port = 3000;
import configViewEngine from "./configs/viewEngine";

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
