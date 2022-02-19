const mongoose = require('mongoose');
const students = require('../data/student')
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    id:{type: String, required: true},
    full_name:{type: String,required: true},
     gender:{type: String,required: true},
    age:{type: Number,required: true},
    grade:{type: String, required: true},
    test1:{type:Object,required:true},
    test2:{type:Object,required:true},
    test3:{type:Object,required:true}

})

module.exports = mongoose.model('Student', studentSchema)