const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  // Type-1 without streaming
  //   fs.readFile("input.txt", "utf-8", (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.end(data);
  //     }
  //   });
  // Type-2 with streaming
  // const rstream = fs.createReadStream("input.txt");
  // rstream.on("data", (chunkdata) => {
  //   res.write(chunkdata);
  // });
  // rstream.on("end", () => {
  //   res.end();
  // });

  // Type-3 with streaming
  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
});

server.listen(3000, () => {
  console.log("Server started");
});
