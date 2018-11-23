const http = require('http');

var port = process.env.PORT || 8080
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, () => {
    console.log('app up on port: ' + port);
});