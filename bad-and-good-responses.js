// Create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!
// ** Bonus **

// Generate the good / bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet!

var http = require('http');

var GOODPORT = 7000;

var BADPORT = 7500;

var goodCompliments = ["You have beautiful eyes!", "When you look at me I instantly blush!", "My heart drops when I look at you!"];

var badCompliments = ["You smell like New York City garbage! Now give me your money!", "I hate you more than I hate Justin Bieber!", "You are an insult to the human race!"]

var handleRequest = function (req, res) {
  res.end(goodCompliments[(Math.floor(Math.random() * (10)) * goodCompliments.length)];
}

var server = http.createServer(handleRequest);

server.listen(GOODPORT, function() {
  console.log("Server is listening at http://localhost:%s", GOODPORT);
});

var handleRequest = function (req, res) {
  res.end(badCompliments[(Math.floor(Math.random() * (10)) * badCompliments.length)];
}

var server = http.createServer(handleRequest);

server.listen(BADPORT, function() {
  console.log("Server is listening at http://localhost:%s", BADPORT);
});