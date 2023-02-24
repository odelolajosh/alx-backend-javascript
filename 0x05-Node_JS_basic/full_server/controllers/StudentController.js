import readDatabase from '../utils'


/**
 * Student Controller
 */
export default class StudentController {
  static getAllStudents(_req, res) {
    const DATABASE = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(DATABASE).then((result) => {
      let text = 'This is the list of our students';
      text += `Number of students: ${result[STUDENT_COUNT]}`;
      Object.entries(result).forEach(([field, names]) => {
        text += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
      });
      res.status(200).send(text);
    }).catch((err) => {
      text = err instanceof Error ? err.message : err.toString();
      return res.status(500).send(text);
    });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const DATABASE = process.argv.length > 2 ? process.argv[2] : '';

    if (major !== 'CS' || major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(DATABASE).then((result) => {
      field = result[major];
      text = `List: ${names.join(', ')}`;
      return res.status(200).send(text);
    }).catch((err) => {
      text = err instanceof Error ? err.message : err.toString();
      return res.status(500).send(text);
    });
  }
}