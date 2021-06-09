var mysql = require("mysql");
exports.search = function (key, mycallback) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Root111!",
    database: "entries",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query(
      "select * from entries where word='" + key + "'",
      function (err, result, fields) {
        if (err) throw err;
        mycallback(null, result);
      }
    );
  });
};
