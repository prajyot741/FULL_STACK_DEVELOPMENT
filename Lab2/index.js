const fs = require("fs");

const math = require("./math");
const express = require("express")
const _= require("lodash");
const PORT = 3000;
const app = express();

app.use(express.static("static"));

app.get("/", (req, res) =>{
    const {name} = req.query;
    console.log(name);
    res.send("index.html")
});
app.get("/userDetail", (req,res)=>{

    res.json ({
        "name": "John",
         "role": "teacher"});
});

fs.writeFileSync("data.txt", " hello world");

fs.appendFileSync("data.txt", " hello world2");

const data=fs.readFileSync("data.txt","utf-8");
// console.log(data);
// console.log(math.add(12,12));
// console.log(math.subtract(12,1));
// console.log(math.multiply(12,12));
// console.log(math.divide(12,2));

console.log(math.add(12,32));
const numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(_.add("1",3), _.sortBy(numbers))

app.listen(PORT, () =>
    console.log(`App started on port ${PORT}`));