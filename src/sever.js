const app = require('../app');
const routes = require('../routes/router');
const PORT = process.env.PORT || 3000;
app.use("/", routes);

app.listen(
    PORT, function (){
        console.log("Server started at http://localhost:3000")
    }
);