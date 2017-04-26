var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname, "/");
var server = httpServer.createServer({root: pathToHtmlAndJsFiles
});

console.log("Server running at localhost:3000")
console.log("'ctrl-c' to end")

server.listen(3000);
