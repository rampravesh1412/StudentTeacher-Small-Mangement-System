const express = require('express');
const router = express.Router();
const {signupStudent , signinStudent} = require('../controller/studentController')
const {signupTeacher , signinTeacher} = require('../controller/teacherController')
const { dashboardStudentController } = require('../controller/Dashboardstd')
// const { findAllData } = require('../controller/getDashboardData')

// signup
router.post('/student/signup' , signupStudent);
router.post('/teacher/signup' , signupTeacher);

// signin
router.post('/student/signin' , signinStudent);
router.post('/teacher/signin' , signinTeacher);

// dashboard
router.post('/student/dashboard' , dashboardStudentController);
// router.post('/student/dashboard' , findAllData);

module.exports = router;