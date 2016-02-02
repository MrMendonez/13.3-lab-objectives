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

// Solution from Jim Mona

// var http = require("http");
// var PORT = 7000;
// var goodThings = ["You're awesome", "You have great taste", "You look fantastic today", "You are an expert developer"]
// var badThings =["You suck bro", "You're having a bad hair day", "That dress does make you look fat", "You're a bad person and you should feel bad"]
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// var handleRequest = function (req, res) {
//   var num = getRandomInt(0, goodThings.length);
//   res.end(goodThings[num]);
// }

// var server = http.createServer(handleRequest);

// server.listen(PORT, function() {
//   console.log("Server is listening at http://localhost:%s", PORT);
// });

// var PORT2 = 7500;

// var handleRequest = function (req, res) {
//   var num = getRandomInt(0, badThings.length);
//   res.end(badThings[num]);
// }

// var server = http.createServer(handleRequest);

// server.listen(PORT2, function() {
//   console.log("Server is listening at http://localhost:%s", PORT2);
// });