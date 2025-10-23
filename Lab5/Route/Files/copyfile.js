const fs = require("fs");

const streamin = fs.createReadStream("log.txt", "utf-8");
const streamout = fs.createWriteStream("copylog.txt", "utf-8");

streamin.pipe(streamout);

const stat = fs.statSync("log.txt");
letfileread = 0;

streamin.on("data", (data) => {
    console.log("progress: " + data.length);
});

streamin.on("end", () => {
    console.log("data transfer completed");
});
streamin.on("error", (err) => {
    console.error("error occurred while reading");
});

streamout.on("error", () => {
    console.log("error occurred while data out");
});

const getProgress = (data) => {
    fileread += data.length;
    return math.ceil = (fileread/stat.size * 100);
}