const express = require("express");

const studentrouter = express.Router();

studentrouter.get("/get", (req, res)=>{
    res.send("getting student details");
});

studentrouter.post("/save", (req, res)=>{
    res.send("saving student details");
});

module.exports =studentrouter;