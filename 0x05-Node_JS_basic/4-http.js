const http = require('http');

const server = http.createServer((_req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write('Hello to Holberton School!');
  res.end();
});

server.listen(1245, 'localhost');

module.exports = server;
