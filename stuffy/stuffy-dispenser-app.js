"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stuffy_class_1 = require("./stuffy.class");
var stuffys = new Array();
for (var i = 0; i < 5; i++) {
    var s = newStuffy(i);
    stuffys.push(s);
}
function newStuffy(i) {
    var id = i;
    var type = i + "type";
    var color = i + "color";
    var size = i + "size";
    var limbs = i + 24;
    var s = new stuffy_class_1.Stuffy(id, type, color, size, limbs);
    return s;
}
stuffys.push(stuffyAdd(stuffys.length));
function stuffyAdd(num) {
    var s = newStuffy(num);
    return s;
}
console.log(stuffys);
stuffys.forEach(function (s) {
    console.log(s.about());
});
console.log();
console.log("get a stuffy by id");
var id = 3;
var stuffiesFound = new Array();
stuffys.forEach(function (s) {
    if (s.id == id) {
        stuffiesFound.push(s);
    }
});
console.log("found stuffy" + stuffiesFound[0].about());
