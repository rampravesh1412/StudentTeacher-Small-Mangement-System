const Student = require("../modles/studentModle");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.signupStudent = async (req, res) => {
  try {
    const { name, email, phoneNumber, password ,confirmPassword } = req.body;

    // validate the student
    const checkingStudent = await Student.findOne({
      email,
    });

    if (checkingStudent) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // hashing password
    const hashPassword = await bcrypt.hash(password, 10);

    const student = await Student.create({
      name,
      email,
      phoneNumber,
      password: hashPassword,
      confirmPassword : hashPassword,
      
      
    });

    return res.status(200).json({
      message: "Student created successfully",
      name: name,
      email: email,
      phoneNumber: phoneNumber,
    });
  } catch (error) {
    console.log(error);
  }
};

// sigin student controller
exports.signinStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find the student
    const student = await Student.findOne({ email });

    // check the student
    if (!student) {
      return res.status(400).json({ error: "Student not found" });
    }

    // check the password
    const passwordMatch = await bcrypt.compare(password, student.password);

    if (!passwordMatch) {
      return res.status(400).json({ error: "Password is incorrect" });
    }

    // generate token
    const payload = {
      name: student.name,
      email: student.email,
      id:student._id
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // student = student.toObject();
    // student.token = token;
    // student.token.password = undefined;

    // send response
    res.status(201).json({
      token,
      student: {
        id: student._id,
        name: student.name,
        email: student.email,
        phoneNumber: student.phoneNumber,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
