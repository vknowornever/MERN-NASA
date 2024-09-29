const express = require("express");
const cors = require("cors");
const planetRouter = require("./routes/planets/planets.router");
const app = express();
const path = require("path");
const morgan = require("morgan");
const launchesRouter = require("./routes/launches/launches.router");

app.use(morgan("combined"));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(planetRouter);
app.use(launchesRouter);
app.get("/*", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  } catch (err) {
    console.log(err);
  }
});
module.exports = app;
