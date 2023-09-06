var http = require("http");
http
  .createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 500 : OK
    // Content Type: text/plain
    response.writeHead(500, { "Content-Type": "text/plain" });
    response.end("Hello World\n");
  })
  .listen(1235);
console.log("Server running at http://127.0.0.1:1263/");
