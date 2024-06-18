const Http = require("http");
const url = require("url");

const host = "localhost";
const port = 8080;

const server = Http.createServer((req, res) => {
  const reqUrl = url.parse(req.url).pathname;
  if (reqUrl === "/") {
    res.writeHead(200);
    res.end("Hello World");
  }

  if (reqUrl === "/home") {
    res.writeHead(200);
    res.end("Hello World Home");
  }
});

server.listen(port, host, () => {
  console.log(`Server has started on http://${host}:${port}`);
});
