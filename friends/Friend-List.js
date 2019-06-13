"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend_1 = require("./Friend");
var friends = new Array();
var f1 = new Friend_1.Friend("Bill", 80, "bill@aol.gov", false);
var f2 = new Friend_1.Friend("Bob", 79, "bob@berb.js", false);
var f3 = new Friend_1.Friend("Bernard", 77, "bernie@us.gov", true);
var f4 = new Friend_1.Friend("Brian", 83, "bri@aim.com", false);
var f5 = new Friend_1.Friend("Burt", 72, "burb@yahoo.gov", false);
friends.push(f1, f2, f3, f4, f5);
console.log(friends);
console.log();
console.log("Name       Age        Email          Best");
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var Friend_2 = friends_1[_i];
    var besty = void 0;
    if (Friend_2.bestFriend == true) {
        besty = "Yes";
    }
    else {
        besty = "No";
    }
    console.log(Friend_2.fName + "        " + Friend_2.age + "      " + Friend_2.email + "        " + besty);
}
