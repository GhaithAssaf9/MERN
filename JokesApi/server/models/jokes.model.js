const mongoose = require("mongoose");

const JokeSchem = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, "it is required"],
		minlength: [2, "should be at least 2 character"]
	},
	punchline: {
		type: String,
		required: [true, "it is required"],
		minlength: [2, "should be at least 2 character"]
	},
	created_at: { type: Date, required: true, default: Date.now },
	updated_at: { type: Date, required: true, default: Date.now },

});

const Joke = mongoose.model("Joke", JokeSchem); 

module.exports = Joke;