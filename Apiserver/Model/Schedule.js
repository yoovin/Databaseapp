const mongoose = require('mongoose')

const scheSchema = new mongoose.Schema({
    title:{type:String, required:true},
    onScreen:{type:Number, required:true},
    offScreen:{type:Number, required:true}
})

module.exports = mongoose.model('schedule', scheSchema)