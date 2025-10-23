const express = require("express");
var fs = require("fs");

const app = express();

app.listen(3000, () => {
    console.log("listening on 3000");
})

app.get("/stream", (req, res) => {
    const filepath = "sample.mp4";
    const fileSize = fs.statSync(filepath).size;
    const head = {
        "Content-Length": fileSize,
        "Content-Type": "video/mp4"
    };
    res.writeHead(200, head);
    const stream = fs.createReadStream(filepath);
    stream.pipe(res);
    
    stream.on("data",(data)=>{
        console.log("data reading"); 
    })
});