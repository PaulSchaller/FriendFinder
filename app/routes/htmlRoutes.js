// dependencies
var path = require("path");

// routing
module.exports = function(app) {

  //get api to the survey html page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  //get api to the homepage
  app.get("/homePage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};