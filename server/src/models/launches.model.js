let launches = new Map();
const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27 , 2030"),
  target: "Kepler-442 b",
  upcoming: true,
  success: true,
};
function addNewLaunches(launchData) {
  let newObj = Object.assign(launch, {
    flightNumber: launch.flightNumber + 1,
    mission: launchData.mission,
    rocket: launchData.rocket,
    launchDate: new Date(launchData.launchDate),
    target: launchData.target,
  });

  launches.set(launch.flightNumber, { ...newObj });
  console.log("set", launches.values());

  return launch;
}

function getAllLaunches() {
  //   console.log(Array.from(launches.values()));
  // launches.values() will retur the value of the map which would be the launch object from the model file {}
  // Array.from syntax will convert it into the array of object [{}]
  console.log("get", launches.values());
  return Array.from(launches.values());
}

module.exports = {
  launches,
  addNewLaunches,
  getAllLaunches,
};
