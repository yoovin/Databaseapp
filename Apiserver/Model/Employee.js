const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    employId:{type:Number, required:true, unique:true}, // 사원아이디
    branchId:{type:Number, required:true},
    name:{type:String, required:true},
    class:{type:String, required:true, default:"Crew"},
    password:{type:String, default:""},
    tel:{type:String, default:""},
    salary:{type:Number, default:0},
    task:{type:String, default:""},
    accuTime:{type:Number, default:0}, // 밀리초
    email:{type:String, default:""}
})

module.exports = mongoose.model('employee', empSchema)