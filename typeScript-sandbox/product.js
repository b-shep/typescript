"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    function Product(code, description, price) {
        this.code = code;
        this.description = description;
        this.price = price;
    }
    Product.prototype.about = function () {
        return "Product:Code = " + this.code + ", Description = " + this.description + ", Price = " + this.price;
    };
    return Product;
}());
exports.Product = Product;
