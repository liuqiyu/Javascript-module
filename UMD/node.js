var http = require('http');
var umd = require('./umd')
console.log(umd)

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8;'});
    response.end('Hello World 我是运行在node 环境的 commonjs规范----' + umd.name);
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');