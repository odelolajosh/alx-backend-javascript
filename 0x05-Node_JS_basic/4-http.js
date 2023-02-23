const http = require('http');

const server = http.createServer((_req, res) => {
  res.write('Hello to Holberton School!');
  res.end();
});

server.listen(1245, 'localhost');
