const express = require('express');
const router = require('./routes');

/**
 * Create a small HTTP server using Express
 */

const PORT = 1245;
const HOST = 'localhost';
const app = express();

app.use(router);

app.listen(PORT, HOST, () => {
	console.log(`Server listening on http://${HOST}:${PORT}`);
});

module.exports = app;
