
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({

	title: {
		type: String,
		required: [true, "title cannot be emtpy"],
		minlength: [3, "The min length should be more than 6"]
	},
	price: {
		type: Number,
		required: [true, "price cannot be emtpy"],
		min: [5, "price should be more than 5"]
	},
	description: {
		type: String,
		required: [true, "desc cannot be emtpy"],
		minlength: [3, "The min length should be more than 3"]
	}
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;