const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title:{type:String, required:true},
    customer:{type:Number, required:true},
    genre:{type:String, required:true},
    onScreen:{type:String, required:true}
})

module.exports = mongoose.model('movie', movieSchema)