const { launches } = require("../../models/launches.model");

function getAllLaunches(req, res) {
  //   console.log(Array.from(launches.values()));
  // launches.values() will retur the value of the map which would be the launch object from the model file {}
  // Array.from syntax will convert it into the array of object [{}]
  return res.status(200).send(Array.from(launches.values()));
}

module.exports = {
  getAllLaunches,
};
