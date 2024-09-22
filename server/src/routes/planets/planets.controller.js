const { planets } = require("../../models/planets.model");

function getAllPlanets(req, res) {
  let habitablePlanets = planets.map((planet) => {
    return planet["kepler_name"];
  });
  return res.status(200).json(habitablePlanets);
}

module.exports = { getAllPlanets };
