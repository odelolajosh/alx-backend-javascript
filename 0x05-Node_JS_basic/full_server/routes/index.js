import express from 'express';
import AppController from '../controllers/AppController';
import StudentController from '../controllers/StudentController';

const router = express.Router();

router.all('/', AppController.getHomepage);
router.get('/students', StudentController.getAllStudents);
router.get('/students/:major', StudentController.getAllStudentsByMajor);

export default router;
