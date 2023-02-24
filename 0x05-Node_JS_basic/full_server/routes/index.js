import express from 'express';
import AppController from '../controllers/AppController';
import StudentController from '../controllers/StudentController';

const router = express.Router();

router.get('/', AppController.getHomepage);
router.get('/students', StudentController.getAllStudents);
router.get('/students/:major', StudentController.getAllStudentsByMajor);

export default router;
// Must be crazy but this is how I got Router.use() error to go away
module.exports = router;
