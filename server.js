var Http = require("http");
var url = require("url");
var host = "localhost";
var port = 8080;
var server = Http.createServer(function (req, res) {
    var reqUrl = url.parse(req.url).pathname;
    if (reqUrl === "/") {
        res.writeHead(200);
        res.end("Hello World");
    }
    if (reqUrl === "/home") {
        res.writeHead(200);
        res.end("Hello World Home");
    }
});
server.listen(port, host, function () {
    console.log("Server has started on http://".concat(host, ":").concat(port));
});
