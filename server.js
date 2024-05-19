const routes = require('./routes/router');

app.use("/", routes);

app.listen(
    PORT, function (){
        console.log("Server started at http://localhost:3000")
    }
);
