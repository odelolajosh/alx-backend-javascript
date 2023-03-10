const fs = require('fs');

/**
 * Count the number of students in a database synchronously.
 * @param {string} path
 * @return {Promise<number>}
 */
function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const content = fs.readFileSync(path, 'utf-8');
  const rows = content.trim().split('\n');
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

  console.log(`Number of students: ${map[STUDENT_COUNT]}`);
  Object.entries(map).forEach(([field, names]) => {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  });
}

module.exports = countStudents;
