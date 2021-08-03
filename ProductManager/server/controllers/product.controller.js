
const Product = require("../models/product.model");
module.exports.index = (request, response) => {
    response.json({
        message: "Create Product"
    });
}
module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title, price, description
    })
        .then(newlyCreatedProduct => res.json({ user: newlyCreatedProduct }))
        .catch(err => res.status(400).json({ message: "Sth wrong", error: err }));
}