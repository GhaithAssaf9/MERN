
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({

	title: {
		type: String,
		required: [true, "Shouldnt be empty"],
		minlength: [3, "Length > 6"]
	},
	price: {
		type: Number,
		required: [true, "Shouldnt be empty"],
		min: [5, "price > 5"]
	},
	description: {
		type: String,
		required: [true, "Shouldnt be empty"],
		minlength: [3, "length > 3"]
	}
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;