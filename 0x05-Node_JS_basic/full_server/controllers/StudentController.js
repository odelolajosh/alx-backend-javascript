import readDatabase, { STUDENT_COUNT } from '../utils';

/** Supported majors */
const SUPPORTED_MAJORS = ['CS', 'SWE'];

/**
 * Student Controller
 */
export default class StudentController {
  /** Returns a report of all students */
  static getAllStudents(_req, res) {
    const DATABASE = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(DATABASE).then((result) => {
      let text = 'This is the list of our students\n';
      // text += `Number of students: ${result[STUDENT_COUNT]}\n`;
      text += Object.entries(result).map(([field, names]) => (
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
      )).join('\n');
      res.status(200).send(text);
    }).catch((err) => {
      const text = err instanceof Error ? err.message : err.toString();
      res.status(500).send(text);
    });
  }

  /** Returns a report of all students by major */
  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const DATABASE = process.argv.length > 2 ? process.argv[2] : '';

    if (!SUPPORTED_MAJORS.includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(DATABASE).then((result) => {
      const names = result[major];
      const text = `List: ${names.join(', ')}`;
      res.status(200).send(text);
    }).catch((err) => {
      const text = err instanceof Error ? err.message : err.toString();
      res.status(500).send(text);
    });
  }
}
