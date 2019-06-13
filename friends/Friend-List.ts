import {Friend} from "./Friend";

let friends: Friend[] = new Array();

let f1 = new Friend("Bill", 80, "bill@aol.gov", false);
let f2 = new Friend("Bob", 79, "bob@berb.js", false);
let f3 = new Friend("Bernard", 77, "bernie@us.gov", true);
let f4 = new Friend("Brian", 83, "bri@aim.com", false);
let f5 = new Friend("Burt", 72, "burb@yahoo.gov", false);

friends.push(f1, f2, f3, f4, f5);
console.log(friends);
console.log();

console.log("Name       Age        Email          Best");
for (let Friend of friends){
    let besty: string;
    if(Friend.bestFriend == true){
        besty = "Yes"
    } else{
        besty = "No";
    }
    console.log(Friend.fName + "        " + Friend.age + "      " + Friend.email + "        " + besty)

}