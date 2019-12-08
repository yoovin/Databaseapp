const mongoose = require('mongoose')

const notiSchema = new mongoose.Schema({
    title:{type:String, required:true},
    desc:{type:String, required:true},
    date:{type:Date, required:true, default:Date.now}
})

module.exports = mongoose.model('notice', notiSchema)