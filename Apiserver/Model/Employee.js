const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    employId:{type:String, required:true, unique:true}, // 사원아이디
    branchId:{type:String, required:true},
    name:{type:String, required:true},
    tell:{type:String, required:true, default:""},
    sarary:{type:Number, required:true, default:0},
    task:{type:String, required:true, default:""},
    class:{type:String, required:true, default:""},
    accuTime:{type:Number, required:true, default:0}, // 밀리초
})

module.exports = mongoose.model('employee', empSchema)