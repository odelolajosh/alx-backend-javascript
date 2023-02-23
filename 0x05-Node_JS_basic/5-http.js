const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const DATABASE_URI = process.argv.length > 2 ? process.argv[2] : '';
const server = http.createServer();

const countStudents = (path) => new Promise((resolve, reject) => {
  if (!fs.existsSync(path)) {
    reject(new Error('Cannot load the database'));
  }
  if (!fs.statSync(path).isFile()) {
    reject(new Error('Cannot load the database'));
  }
  const options = { encoding: 'utf-8' };
  fs.readFile(path, options, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    const rows = data.trim().split('\n');
    const fields = rows[0].split(',');
    const fieldPos = fields.findIndex((value) => value === 'field');
    const fNamePos = fields.findIndex((value) => value === 'firstname');

    const STUDENT_COUNT = Symbol('Student count');

    const map = {};
    for (const row of rows.slice(1)) {
      const splitRow = row.split(',');
      if (splitRow.length && (splitRow.length >= fieldPos + 1 && splitRow.length >= fNamePos + 1)) {
        const field = splitRow[fieldPos];
        const firstName = splitRow[fNamePos];
        map[field] = map[field] || [];
        map[field].push(firstName);
        map[STUDENT_COUNT] = (map[STUDENT_COUNT] || 0) + 1;
      }
    }

    let result = `Number of students: ${map[STUDENT_COUNT]}`;
    Object.entries(map).forEach(([field, names]) => {
      result += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    });
    resolve(result);
  });
});

const routes = {
  '/': (_req, res) => {
    const text = 'Hello Holberton School!';

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', text.length);
    res.statusCode = 200;
    res.write(Buffer.from(text));
  },
  '/students': (_req, res) => {
    let text = 'This is the list of our students\n';

    countStudents(DATABASE_URI).then((result) => {
      text += result;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', text.length);
      res.statusCode = 200;
      res.write(Buffer.from(text));
    }).catch((err) => {
      text = err instanceof Error ? err.message : err.toString();
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', text.length);
      res.statusCode = 500;
      res.write(Buffer.from(text));
    });
  },
};

server.on('request', (req, res) => {
  if (req.url in routes) {
    routes[req.url](req, res);
  } else {
    const text = 'Resource not found';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', text.length);
    res.statusCode = 404;
    res.write(Buffer.from(text));
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Server started on http://${HOST}:${PORT}`);
});

module.exports = server;
