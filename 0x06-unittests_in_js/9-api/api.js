const express = require('express');

const PORT = 7865, HOST = 'localhost';
const app = express();

app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for card ${id}`);
});

app.listen(PORT, HOST, () => {
  console.log(`API available on ${HOST} port ${PORT}`);
});

module.exports = app;
