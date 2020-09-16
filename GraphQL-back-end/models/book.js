const mongoose = require("mongoose")
const Schema = mongoose.Schema

//mongoDB automatically adds id field 
// so we dont need to worry
//about defining it in the schema
const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
})

module.exports = mongoose.model('Book', bookSchema)