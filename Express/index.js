const express = require("express");
const app = express();
app.get("/", (req, res) => {
  //   res.send("hello from express  ");
  res.write("<h1>Hello from Express</h1>");
  res.write("<h1>Welcome Back</h1>");
  res.send();
});
app.get("/about", (req, res) => {
  res.status(200).send("Hello from About US Page");
});
app.get("/contactus", (req, res) => {
  res.status(200).send("Hello from Contact Us Page");
});
app.get("/json", (req, res) => {
  res.status(200).json([
    {
      id: 1,
      name: "utsav",
      age: 20,
    },
    {
      id: 2,
      name: "utsav2.0",
      age: 20,
    },
  ]);
});

app.listen(3000, () => {
  console.log("server started");
});
