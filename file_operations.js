// file-operations.js
const fs = require("fs");

// Create and write to the file
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("File created and data written.");

  // Read and log the data from the file
  fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
  });
});
