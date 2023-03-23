const productController = require("../controllers/product.controller")

module.exports  = (app) => {
    app.get("/api/products", productController.findAllProducts)
    app.post("/api/products", productController.createProduct)
    app.get("/api/products/:id", productController.findOne)
    app.put("/api/products/edit/:id", productController.updateProduct)
    app.delete("/api/products/:id", productController.deleteProduct)
}