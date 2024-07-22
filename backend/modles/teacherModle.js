const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength : 25
    },

    email:{
        type:String,
        required:true,
        unique:true,
        trim : true
    },

    phoneNumber : {
        type: String,
        required: true,
        trim: true,
        maxLength : 10
    },
    password : {
        type: String,
        required: true,
    },
    confirmPassword:{
        type: String,
        required : true
    },
    

})

module.exports = mongoose.model('Teacher', teacherSchema);