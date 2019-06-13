"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_class_1 = require("../model/product.class");
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [];
        this.nextId = 1;
    }
    ProductService.prototype.initializeList = function () {
        var p1 = new product_class_1.Product(1, "T001", "big wet droid", 59.50);
        var p2 = new product_class_1.Product(2, "T002", "small dry droid", 29.50);
        var p3 = new product_class_1.Product(3, "T003", "medium damp droid", 49.50);
    };
    ProductService.prototype.listProducts = function () {
        this.products.forEach(function (p) {
            console.log(p.about);
        });
    };
    ProductService.prototype.getProduct = function (id) {
        var product = new Array();
        this.products.forEach(function (p) {
            if (id == p.id) {
                product.push(p);
            }
        });
        if (product.length != 0) {
            console.log("Product Found: " + product[0].about);
        }
        else {
            console.log("No product found for id: " + id);
        }
    };
    ProductService.prototype.addProduct = function (newProduct) {
        this.products.push(newProduct);
    };
    ProductService.prototype.removeById = function (id) {
        var _this = this;
        this.products.forEach(function (p) {
            if (p.id == id) {
                var index = _this.products.indexOf(p);
                _this.products.splice(index, 1);
            }
        });
    };
    return ProductService;
}());
exports.ProductService = ProductService;
