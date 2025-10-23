const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const fs = require('fs');

const PORT = 3000;
const time = new Date();
const writeStream = fs.createWriteStream(`.\\log_${time.getUTCDate()}_${time.getMilliseconds()}.txt`, "utf-8");
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.headers['authorization']);
    console.log(req.headers);

    writeStream.write(JSON.stringify(req.headers) + "\n");

    next();
});

app.get("/getstudent", createProxyMiddleware({
    target: 'http://localhost:4001',
    changeOrigin: true,
    pathRewrite: {'^/getstudent': '/getstudent'}}));

app.get("/getteacher", createProxyMiddleware({
    target: 'http://localhost:4002',
    changeOrigin: true,
    pathRewrite: {'^/getteacher': '/getteacher'}}));

app.listen(PORT, () => {
    console.log(`Gateway server is running on port ${PORT}`);
});