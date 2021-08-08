const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: [ true, "required name "],
        minlength: [2, "Name > 3 characters"],
    },
},{timestamps: true});

module.exports = mongoose.model("Author", AuthorSchema);