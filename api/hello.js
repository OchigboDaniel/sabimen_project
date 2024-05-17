const app = require("../app");
const route = require("../routes/hello");

app.use("/api/", route);

module.exports = app;