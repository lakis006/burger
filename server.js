const express = require("express");
const meth = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
var routes = require("./controllers/routes.js");
const app = express();



//this is where we set up the http protocol so that it will do our POST and GET req 
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));


app.use(meth("_method"));

// we are telling our app to use handlebars as a way to interpit html files. 
app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");


console.log(`Routes ${routes}`)
app.use("/",routes);
app.use("/update", routes);
app.use("/create", routes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
	console.log(`app listening on port http://localhost:${PORT}`)
});