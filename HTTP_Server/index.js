const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.end("You are on homepage");
  } else if (req.url == "/about") {
    res.end("You are on About us Page");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>Page not Found</h1>");
  }
});
server.listen(3000, () => {
  console.log("server started");
});
