const mongoose = require('mongoose')

const genreSchema = new mongoose.Schema({
	name:{type:String, required:true},
	genre_income:{type:Number, required:true},
	month:{type:Date, required:true}
})

module.exports = mongoose.model('genre', genreSchema)