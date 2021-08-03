const Product = require('../models/product.model');

module.exports.getAllProducts = (req, res) => {
    console.log("getAllProducts");

    Product.find({})  
        .then((allProducts) => {
            console.log(allProducts);
            res.json(allProducts);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};
module.exports.getOneProduct = (req, res) => {
    console.log("getOneProduct");
    console.log(req.params.id);

    Product.findById(req.params.id)
        .then((oneProduct) => {
            console.log(oneProduct);
            res.json(oneProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};

module.exports.createProduct = (req, res) => {
    console.log("createProduct");
    console.log(req.body);

    Product.create(req.body)
        .then((newProduct) => {
            console.log(newProduct);
            res.json(newProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
}
module.exports.updateProduct = (req, res) => {
    console.log("updateProduct");
    console.log(req.params.id);  
    console.log(req.body);       
    Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,    
        runValidators: true  
    })
        .then((updatedProduct) => {
            console.log(updatedProduct);
            res.json(updatedProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};
module.exports.deleteProduct = (req, res) => {
    console.log("deleteProduct");
    console.log(req.params.id);

    Product.findByIdAndDelete(req.params.id)
        .then((deletedProduct) => {
            console.log(deletedProduct);
            res.json(deletedProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};
