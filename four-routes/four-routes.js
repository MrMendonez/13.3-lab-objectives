// Create a website with 4 routes:
// -Home
// -Favorite Food
// -Favorite Movies
// -Favorite CSS Frameworks
// Serve the HTML from files rather than straight in the JavaScript

var http = require('http'), url = require('url'), fs = require('fs');

// var faveFood = require("./fave-food.html");
// var faveMovies = require("./fave-movies.html");
// var faveCss = require("./fave-css.html");

var PORT = 8080;









var handleRequest = function (req, res) {
  console.log('req.url', req.url);
  var url_parts = url.parse(req.url);
  switch (url_parts.pathname) {
    case '/':
      display_home(req, res);
      break;
    case '/portfolio':
      display_portfoio(req, res);
      break;
    default:
      display_404(req, res);
      break;
  }

}

var display_home = function(req, res) {
  fs.readFile('./home.html', function (err, html) {
   if (err) {
       throw err; 
   }       
   http.createServer(function(request, response) {  
       response.writeHeader(200, {"Content-Type": "text/html"});  
       response.write(html);  
       response.end();  
   }).listen(8080);
  });
}

var display_faveFood = function(req, res) {
  fs.readFile('./home.html', function (err, html) {
   if (err) {
       throw err; 
   }       
   http.createServer(function(request, response) {  
       response.writeHeader(200, {"Content-Type": "text/html"});  
       response.write(html);  
       response.end();  
   }).listen(PORT);
  });
}

var display_faveMovies = function(req, res) {
  var myHTML = "<html><body>";
  myHTML += "<h1>Portfolio</h1>";
  myHTML += "<a href='/'>Home</a>";
  myHTML += "</body></html>";
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(myHTML);
}

var display_faveCss = function(req, res) {
  var myHTML = "<html><body>";
  myHTML += "<h1>Portfolio</h1>";
  myHTML += "<a href='/'>Home</a>";
  myHTML += "</body></html>";
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(myHTML);
}

var display_404 = function(req, res) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write("<h1>How did you get here?</h1>");
  res.end("This is not the page you are looking for.");
}


var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT);
});

// Jim Mona's Solution:

// var http = require('http'), url = require('url'), fs = require('fs');

// var PORT = 8080;

// var handleRequest = function (req, res) {
//   console.log('req.url', req.url);
//   var url_parts = url.parse(req.url);
//   switch (url_parts.pathname) {
//     case '/':
//       display_root(req, res);
//       break;
//     case '/favoritefoods':
//       display_favfood(req, res);
//       break;
//     case '/favoritecssframeworks':
//       display_favcss(req, res);
//       break;
//     default:
//       display_404(req, res);
//       break;
//   }

// }

// var display_root = function(req, res) {
//   fs.readFile("home.html", "utf8", function(err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       var myHTML = data;
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.end(myHTML);
//     }
//   })
// }

// var display_favfood = function(req, res) {
//   fs.readFile("favfoods.html", "utf8", function(err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       var myHTML = data;
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.end(myHTML);
//     }
//   })
// }


// var display_favcss = function(req, res) {
//   fs.readFile("favcss.html", "utf8", function(err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       var myHTML = data;
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.end(myHTML);
//     }
//   })
// }

// var display_404 = function(req, res) {
//   res.writeHead(404, {'Content-Type': 'text/html'});
//   res.write("<h1>Not found</h1>");
//   res.end("This is not the page you are looking for");
// }

// var server = http.createServer(handleRequest);

// server.listen(PORT, function() {
//   console.log("Server is listening at http://localhost:%s", PORT);
// });