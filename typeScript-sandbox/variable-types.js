"use strict";
var Square = /** @class */ (function () {
    function Square(side) {
        this.side = side;
    }
    Square.prototype.area = function () {
        return this.side * this.side;
    };
    return Square;
}());
var sqr = new Square(4);
console.log("area of square = " + sqr.area());
var Customer = /** @class */ (function () {
    function Customer(n) {
        this._name = n;
    }
    Object.defineProperty(Customer.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
function go(a, b) {
    if (a === void 0) { a = 1; }
    console.log("a = " + a + ", b = ", +b);
}
go(4, true);
go(7);
go();
