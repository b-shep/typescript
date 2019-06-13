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
