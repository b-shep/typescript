"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_class_1 = require("../model/product.class");
var product_service_1 = require("../service/product.service");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(productSvc) {
        this.productSvc = productSvc;
    }
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
var productComp = new ProductComponent(new product_service_1.ProductService());
productComp.productSvc.initializeList();
productComp.productSvc.listProducts();
console.log("Add new product: ");
productComp.productSvc.addProduct(new product_class_1.Product(4, "T004", "shiny mediocre bozo", 76.90));
productComp.productSvc.listProducts();
//remove by id
var id = 2;
productComp.productSvc.removeById(id);
productComp.productSvc.listProducts();
