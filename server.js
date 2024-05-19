const { default: mongoose } = require('mongoose');
const app = require('./app')
const routes = require('./routes/router');
const { error } = require('ajv/dist/vocabularies/applicator/dependencies');



app.use("/", routes);

mongoose.connect(process.env.DB_url)
.then(() => {
    app.listen(
        process.env.PORT, ()=>{
            console.log("Server started at http://localhost:3000")
        }
    );
})
.catch((error)=> {
    console.log(error);
}
)
