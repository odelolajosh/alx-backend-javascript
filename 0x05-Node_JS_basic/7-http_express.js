const express = require('express');
const fs = require('fs');

/**
 * Create a small HTTP server using Express
 */

const PORT = 1245;
const HOST = 'localhost';
const DATABASE_URI = process.argv.length > 2 ? process.argv[2] : '';
const app = express();

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

app.get('/', (_req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_req, res) => {
  let text = 'This is the list of our students\n';
  countStudents(DATABASE_URI)
    .then((result) => res.send(text + result))
    .catch((err) => {
      text += err instanceof Error ? err.message : err.toString();
      return res.send(text);
    });
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
  countStudents(DATABASE_URI);
});

module.exports = app;
