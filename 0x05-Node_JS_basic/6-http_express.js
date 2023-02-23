const express = require('express');

/**
 * Create a small HTTP server using Express
 */

const PORT = 1245;
const HOST = 'localhost';
const app = express();

app.all('/', (_req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});

module.exports = app;
