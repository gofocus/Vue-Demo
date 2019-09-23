'use strict'

//通过require将http库引入到程序中
const http = require('http');

//创建一个http服务器
const server = http.createServer();

server.on('request', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World！\n');
});

server.listen(8099,function () {
    console.log('Server is running!');
});
