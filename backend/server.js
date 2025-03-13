const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();
app.use(express.json());
app.use(cors());

//Login route
app.get("/login", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.post("/login", (req, res) => {
  //console.log(req.body);
  //res.send(JSON.stringify(req.body));
  const name = req.body.name;
  const pass = req.body.pass;
  console.log("name " + name + "//" + "pass " + pass)
  uploadToDB(name, pass)
});

async function uploadToDB(name, pass) {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users",
  });
  try {
    const [results, fields] = await connection.query(
      "INSERT INTO users (name, password) values (?, ?);",
      [name, pass],
    );
  } catch (err) {
    return console.log(err);
  }
  return console.log("Success");
}

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
