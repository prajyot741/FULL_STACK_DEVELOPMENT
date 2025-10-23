const express = require("express");

const subjectrouter = express.Router();

subjectrouter.get("/get", (req, res)=>{
    res.send("getting subject details");
});

subjectrouter.post("/save", (req, res)=>{
    res.send("saving subject details");
});

module.exports =subjectrouter;