var http = require('http'), url = require('url');

var PORT = 8080;

var handleRequest = function (req, res) {
  console.log('req.url', req.url);
  var url_parts = url.parse(req.url);
  switch (url_parts.pathname) {
    case '/':
      display_root(req, res);
      break;
    case '/portfolio':
      display_portfoio(req, res);
      break;
    default:
      display_404(req, res);
      break;
  }

}

var display_root = function(req, res) {
  var myHTML = "<html><body>";
  myHTML += "<h1>Home page!</h1>";
  myHTML += "<a href='/portfolio'>Portfolio</a>";
  myHTML += "</body></html>";
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(myHTML);
}

var display_portfoio = function(req, res) {
  var myHTML = "<html><body>";
  myHTML += "<h1>Portfolio</h1>";
  myHTML += "<a href='/'>Home</a>";
  myHTML += "</body></html>";
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(myHTML);
}

var display_404 = function(req, res) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write("<h1>Not found</h1>");
  res.end("This is not the page you are looking for");
}


var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT);
});