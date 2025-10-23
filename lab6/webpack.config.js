const path = require('path');

module.exports = {
    target: 'node',
    entry: './Gateway/gateway.js',
    output: {
        filename: 'gateway.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production', 
};