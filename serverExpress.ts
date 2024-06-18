const express = require("express");

const app = express();

const db = [{ name: "luis" }, { name: "rafael" }];

app.get("/", (req, res) => {
  console.log({ req });

  res.status(201).send({
    data: db,
    message: "success",
    code: 201,
  });
});

app.post("/home", (req, res) => {
  res.send("hello world Post");
});

app.get("/error", (req, res) => {
  res.status(404).send({ data: [], message: "not found", code: 404 });
});

app.listen(4000, () => {
  console.log("Port 4000");
});
