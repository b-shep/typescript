"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stuffy = /** @class */ (function () {
    function Stuffy(id, t, c, s, l) {
        this.id = id;
        this.type = t;
        this.color = c;
        this.size = s;
        this.limbs = l;
    }
    ;
    Stuffy.prototype.about = function () {
        return " id = " + this.id + ", type= " + this.type + ", color= " + this.color + ", size= " + this.size + ", limbs = " + this.limbs;
    };
    return Stuffy;
}());
exports.Stuffy = Stuffy;
