var http = require("http");
var url = require("url");
var path = require("path");
var calcModule = require("./calcModule.js");
var fs = require("fs");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var ext = path.extname(q.pathname);
    if (ext === ".css") {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(fs.readFileSync("css/style.css"), "utf-8");
    } else if (q.pathname === "/calc.js") {
      calcModule.calc(req, res, q.query);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(fs.readFileSync("index.html"), "utf-8");
    }
    res.end();
  })
  .listen(8080);
