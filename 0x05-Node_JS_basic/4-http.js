const http = require('http');

/**
 * Create a small HTTP server using Node's HTTP module
 */

const PORT = 1245;
const HOST = 'localhost';
const server = http.createServer();

server.on('request', (_req, res) => {
  const text = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', text.length);
  res.statusCode = 200;
  res.write(Buffer.from(text));
});

server.listen(PORT, HOST);

module.exports = server;
