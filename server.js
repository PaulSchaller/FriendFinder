// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// tells node we are creating an "express" server
var app = express();

// sets an initial port that we will use later in our listener
var PORT = process.env.PORT || 8080;


// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// route files
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});