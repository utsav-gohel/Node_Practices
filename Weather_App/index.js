const request = require("request");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.redirect("/about?name=pune"); //it redirect to /about
});
app.get("/about", (req, res) => {
  request()
  // ` https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&APPID=bd9c004059a9f7e98ca58ac52b4e5fec`
    .on("data", (chunk) => {
      const obj = JSON.parse(chunk);
      const arr = [obj];
      // console.log(arr[0].name + arr[0].main.temp);
      if (arr[0].name && arr[0].main.temp) {
        res.write("Temperature of " + arr[0].name + " is " + arr[0].main.temp);
      } else {
        res.write("Check the city name again ");
      }
    })
    .on("end", (err) => {
      console.log(err);
      res.end();
    });
});

app.listen(3000, () => {
  console.log("server started");
});
