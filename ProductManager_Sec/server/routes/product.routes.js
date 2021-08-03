
const ProductController = require('../controllers/product.controller');

module.exports = function(app){

    app.get("/api/product", ProductController.getAllProducts);
    app.get("/api/product/:id", ProductController.getOneProduct);
    app.post("/api/product", ProductController.createProduct);
    app.put("/api/product/:id", ProductController.updateProduct);
    app.delete("/api/product/delete/:id", ProductController.deleteProduct);
}