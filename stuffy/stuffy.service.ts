import {Stuffy} from "./stuffy.class";


export class StuffyService {
    stuffyList: Stuffy[] = [];
    nextId: number = 1;


    add(stuffy: Stuffy): string {
        stuffy.id = this.nextId++;
        this.stuffyList.push(stuffy);
        return "success";
    }

    // remove(id: number): string {
    //     this.stuffyList.forEach(s => {
    //         if (s.id == id){
    //             let idx: number = this.stuffyList
    //             this.stuffyList.splice(idx,1);
    //         }
    //     });
    // }


}