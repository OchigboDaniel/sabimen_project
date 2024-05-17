const app = require("../app");
const route = require("../routes/package");

app.use("/api/", route);

module.exports = app;