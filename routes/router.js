const routes = require("express").Router();

const hello = require("./hello");
const package = require("./package");

routes.get("/", async function (req, res) {
    res.send("Home")
});

routes.use('/', hello);
routes.use('/', package);

module.exports = routes;
