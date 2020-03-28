var express = require("express");

var path = require("path");

var app = express();

//Set port

var PORT = process.env.PORT || 8080;

//Express app

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//ROUTER

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//LISTENER

app.listen(PORT, function(){
    console.log("App listeninig on PORT " + PORT);
    
});

