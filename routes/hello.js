const hello = require("express").Router();

hello.get(
    "/hello", (req, res) => {
        res.send("Hello World")
    }
);

module.exports = hello;