var http = require('http');
//port 6000, 4000, 3000, 30002 are always free
http.createServer(function(req, res) {
    var a = 20;
    var b = 200;
    var c = a + b;
    mesg = `${a} + ${b} = ${c}`;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(mesg);
}).listen(3000);

console.log("server is listening on http://127.0.0.1:3000");