const fs = require("fs");

//Synchronus version

//Creating a new file
// fs.writeFileSync("file.txt", "Everything happens for a reason");

//Add more content into file
// fs.appendFileSync("file.txt", ", Just Keep Smiling");

//Read file content
// const data = fs.readFileSync("file.txt", "utf-8");
// console.log(data);

//Rename file
// fs.renameSync("file.txt", "files.txt");

//Delete file
// fs.unlinkSync("file.txt");

//ASynchronus version

//Creating a new file
// fs.writeFile("Async.txt", "God's plan always better than yours.", () => {
//   console.log("File created");
// });

// Add more content into file
// fs.appendFile("Async.txt", " So belive in them", () => {
//   console.log("Content appended");
// });

//Read file content
// fs.readFile("Async.txt", "utf-8", (err, val) => {
//   console.log(val);
// });

//Rename file
// fs.readFile("Async.txt", "Asyncc.txt");

//Delete file
// fs.unlink("Async.txt");

//Sync vs Async file

// console.log("Before the file");
// const data = fs.readFileSync("file.txt", "utf-8");
// console.log(data);
// console.log("After the file");

// console.log("Before the file");
// fs.readFile("file.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// console.log("After the file");
