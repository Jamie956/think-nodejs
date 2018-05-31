const express = require("express");
const app = express();
const axios = require("axios");
const bodyparser = require("body-parser");

app.use(bodyparser.json());

app.get("/", (req, res) => {
  axios
    .get("http://localhost:8080/product")
    .then(function(response) {
      let data = response.data;
      res.json(data);
    })
    .catch(function(error) {
      console.log(error);
      res.end(error);
    });
});

app.get("/id", (req, res) => {
  axios
    .get("http://localhost:8080/product/123")
    .then(function(response) {
      let data = response.data;
      res.json(data);
    })
    .catch(function(error) {
      console.log(error);
      res.end(error);
    });
});

app.listen("3000", () => {
  console.log("listen on port 3000");
});