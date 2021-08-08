const mongoose = require("mongoose");

const Products = new mongoose.Schema({
	title: {
		type: String,
		require: [true, "title can't be empty"],
		minlength: [2, "title can't be less than 2"]
	},
	price: {
		type: Number,
		require: [true, "title can't be null"],
		min: [0, "title can't be less than 0"]
	},
	description: {
		type: String,
		require: [true, "title can't be null"],
		minlength: [10, "title can't be less than 10"]
	}
}, { timestamps: true, collection: 'products' });

const Product = mongoose.model("Product", Products);

module.exports = Product;