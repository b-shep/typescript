import {Stuffy} from "./stuffy.class";

let stuffys: Stuffy[] = new Array();

for (let i = 0; i < 5; i ++){
   let s: Stuffy = newStuffy(i);
    stuffys.push(s);
}

function newStuffy(i: number): Stuffy{
    let id: number = i;
    let type: string = i + "type";
    let color: string = i + "color";
    let size: string = i + "size";
    let limbs: number = i + 24;
    let s: Stuffy = new Stuffy(id, type, color, size, limbs);
    return s;
}



stuffys.push(stuffyAdd(stuffys.length));

function stuffyAdd(num: number): Stuffy{
    let s: Stuffy = newStuffy(num);
    return s;
}

console.log(stuffys);

stuffys.forEach(s => {
    console.log(s.about());
});

console.log();
console.log("get a stuffy by id");



let id:number = 3;


let stuffiesFound: Stuffy[] = new Array();

stuffys.forEach(s => {
    if (s.id == id){
        stuffiesFound.push(s);
    }
});



console.log("found stuffy" + stuffiesFound[0].about());



