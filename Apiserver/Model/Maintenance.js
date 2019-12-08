const mongoose = require('mongoose')

const mainSchema = new mongoose.Schema({
    name:{type:String, required:true},
    month:{type:String, required:true},
    count:{type:Number, required:true},
    remain:{type:Number, required:true},
    originPrice:{type:Number, required:true},
    order:{type:Number, required:true}
})

module.exports = mongoose.model('maintenance', mainSchema)