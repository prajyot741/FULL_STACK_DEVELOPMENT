const express = require("express");

const teacherrouter = express.Router();

studentrouter.get("/get", (req, res)=>{
    res.send("getting teacher details");
});

teacherrouter.post("/save", (req, res)=>{
    res.send("saving teacher details");
});

module.exports = teacherrouter;