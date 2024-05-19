const express = require('express');
const app = express();
const routes = require('./routes/router');

const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use("/", routes);

app.listen(
    PORT, function (){
        console.log("Server started at http://localhost:3000")
    }
);

module.exports = app;