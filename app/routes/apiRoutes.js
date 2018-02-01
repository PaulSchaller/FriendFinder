//requiring the file that contains the data
var friends = require("../data/friends");

//api routes
//a get request api to get data from the friends.js file
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


//a post request api to post survey responses to the database file
  app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    console.log(req.body);
    res.json(true);
    });
};