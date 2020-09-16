const mongoose = require("mongoose")
const Schema = mongoose.Schema

//mongoDB automatically adds id field 
// so we dont need to worry
//about defining it in the schema
const authorSchema = new Schema({
    name: String,
    age:Number
})

module.exports = mongoose.model('Author', authorSchema)