const fs = require("fs");
const filestream = fs.createWriteStream("log2.txt", "utf-8");
const readfilstream = fs.createReadStream("log.txt", "utf-8")
let readfiledata = '';

readfilstream.on("data", (data) => {
    readfiledata += data;
    console.log("reading data")
});

readfilstream.on("end", () => {
    console.log("File reading completed");
});

readfilstream.on("error", () => {
    console.error("Error reading to file");
});

readfilstream.on("open", () => {
    console.log("File opened successfully");
});

filestream.on("close", () => {
    console.log("File closed successfully");
});
