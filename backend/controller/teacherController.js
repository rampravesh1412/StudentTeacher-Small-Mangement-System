const Teacher = require("../modles/teacherModle");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.signupTeacher = async (req, res) => {
  try {
    const { name, email, phoneNumber , password , confirmPassword } = req.body;

    // validate the user
    const checkingTeacher = await Teacher.findOne({
      email
    });

    if (checkingTeacher) {
      return res.status(400).json({ error: "Email already exists" });
    };

    // hashing password
    const hashPassword = await bcrypt.hash(password, 10);

    const teacher = await Teacher.create({
      name,
      email,
      phoneNumber,
      password : hashPassword,
      confirmPassword : hashPassword,
      
    });
    
    return res.status(200).json({
      message: "Teacher created successfully",
      name: name,
      email: email,
      phoneNumber: phoneNumber,
    });
  } catch (error) {
    console.log(error);
  }
};


// sigin teacher controller
exports.signinTeacher = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find the teacher
    const teacher = await Teacher.findOne({ email });

    // check the teacher
    if (!teacher) {
      return res.status(400).json({ error: "teacher not found" });
    }

    // check the password
    const passwordMatch = await bcrypt.compare(password, teacher.password);

    if (!passwordMatch) {
      return res.status(400).json({ error: "Password is incorrect" });
    }

    // generate token
    const payload = {
      name: teacher.name,
      email: teacher.email,
      id:teacher._id
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // send response
    res.status(201).json({
      token,
      teacher: {
        id: teacher._id,
        name: teacher.name,
        email: teacher.email,
        phoneNumber: teacher.phoneNumber,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
