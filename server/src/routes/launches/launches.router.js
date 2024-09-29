const express = require("express");
const {
  getAllLaunchesController,
  postLaunches,
} = require("./launches.controller");
const launchesRouter = express.Router();

launchesRouter.get("/launches", getAllLaunchesController);
launchesRouter.post("/launches", postLaunches);

module.exports = launchesRouter;
