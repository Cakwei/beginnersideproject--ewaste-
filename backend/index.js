const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

app.use(cors());

app.listen(8080, () => {
  console.log("server listening on port 8080");
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO user (username, userpass) VALUES ('Cakwei', '123')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});