let launches = new Map();
const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27 , 2030"),
  destination: "Kepler-442 b",
  upcoming: true,
  success: true,
};
launches.set(launch.flightNumber, launch);

function addNewLaunches(launchData) {
  let newLaunch = Object.assign(launch, {
    flightNumber: launch.flightNumber + 1,
    mission: launchData.mission,
    rocket: launchData.rocket,
    launchDate: new Date(launchData.launchDate),
    destination: launchData.destination,
  });

  launches.set(newLaunch.flightNumber, newLaunch);

  return newLaunch;
}

function getAllLaunches() {
  //   console.log(Array.from(launches.values()));
  // launches.values() will retur the value of the map which would be the launch object from the model file {}
  // Array.from syntax will convert it into the array of object [{}]
  return Array.from(launches.values());
}

module.exports = {
  launches,
  addNewLaunches,
  getAllLaunches,
};
