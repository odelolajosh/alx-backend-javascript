const fs = require('fs');

export const STUDENT_COUNT = Symbol('Student count');

/**
 * Count the number of students in a database synchronously.
 * @param {string} path
 * @return {Promise<number>}
 */
const readDatabase = (path) => new Promise((resolve, reject) => {
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

    resolve(map);
  });
});

export default readDatabase;
