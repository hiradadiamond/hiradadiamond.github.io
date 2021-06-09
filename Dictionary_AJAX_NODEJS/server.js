var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var word = require("./word");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("/res"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/res/style.css", function (req, res) {
  res.sendFile(path.join(__dirname, "/res/style.css"));
});

app.get("/clientScripts.js", function (req, res) {
  res.sendFile(path.join(__dirname, "/clientScripts.js"));
});

app.post("/post_data", function (req, res) {
  var key = req.body.searchkey;
  word.search(key, function (err, data) {
    if (err) throw err;
    res.send({ def: data });
  });
});

var server = app.listen(1000, function () {
  console.log("server is running");
});
