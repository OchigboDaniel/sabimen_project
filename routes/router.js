const routes = require("express").Router();

routes.get("/", async function (req, res) {
    res.send("Home")
});


module.exports = routes;
