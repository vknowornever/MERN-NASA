const http = require("http");
const app = require("./app");

const { loadPlanets } = require("./models/planets.model");
const server = http.createServer(app);

const PORT = 8000;

async function startServer() {
  await loadPlanets();
  server.listen(PORT, () => {
    // Server listining at port 8000
    console.log(`Server listining at port ${PORT}`);
  });
}

startServer();
