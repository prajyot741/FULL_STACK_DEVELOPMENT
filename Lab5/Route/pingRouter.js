const express = require('express');

const mainrouter = express.Router();

Router.get('/', (req, res) => {
    res.send("hello world");
});

module.exports = mainrouter;