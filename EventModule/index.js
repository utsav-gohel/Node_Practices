const EventEmitter = require("events");
const event = new EventEmitter();

event.on("Checkpage", (statusCode, msg) => {
  console.log(`status code is ${statusCode} and the page is ${msg}`);
});

event.emit("Checkpage", 200, "OK");
