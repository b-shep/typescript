"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(id, code, description, price) {
        this.id = id;
        this.code = code;
        this.description = description;
        this.price = price;
    }
    Product.prototype.about = function () {
        return "Product:Code = " + this.code +
            ", Description = " + this.description +
            ", Price = " + this.price;
    };
    return Product;
}());
exports.Product = Product;
