const mongoose = require('mongoose');

const dashboardStudent = new mongoose.Schema({
    bookname:{
        type:String,
        required:true,
        
    },

    name:{
        type:String,
        required:true,
        
    },

    rollnumber : {
        type: String,
        required: true,
        
    },
    startingdate : {
        type: String,
        required: true,
    },
    returingdate:{
        type: String,
        required : true
    }


})

module.exports = mongoose.model('Dashboardstd', dashboardStudent);