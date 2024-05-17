const package = require("express").Router();

package.get(
    "/package", (req, res) => {
        res.send("Packages");
    }
);

module.exports = package;