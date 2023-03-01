const express = require("express");
const path = require("path");
const app = express();

// console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));
app.get("/", (req, res) => {
  res.write("hello");
  res.end();
});

app.listen(3000, () => {
  console.log("server started");
});
