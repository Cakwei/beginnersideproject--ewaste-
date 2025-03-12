const express = require("express");

const cors = require("cors");
const mysql = require("mysql2");
const app = express();
app.use(cors());


app.get('/get', (req, res) => {
  console.log('/get')
});
app.post('/post', (req, res) => {
  console.log('post')
});
app.delete('/delete', (req, res) => {
  console.log('delete')
});app.listen(8080, () => {
  console.log("server listening on port 8080");
});