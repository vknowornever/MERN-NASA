const {
  launches,
  getAllLaunches,
  addNewLaunches,
} = require("../../models/launches.model");

function getAllLaunchesController(req, res) {
  return res.status(200).send(getAllLaunches());
}

function postLaunches(req, res) {
  let launch = req.body;
  if (isNaN(new Date(launch.launchDate))) {
    // isNaN is the JS function to check if the input is valid number or no
    // internally the isNaN calls value function on the date object to check if it is valid and return true or false

    res.status(400).send({
      message: "Invalid Date",
    });
  }
  let addedLaunch = addNewLaunches(launch);
  res.status(201).send(addedLaunch);
}

module.exports = {
  getAllLaunchesController,
  postLaunches,
};
