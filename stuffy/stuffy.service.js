"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StuffyService = /** @class */ (function () {
    function StuffyService() {
        this.stuffyList = [];
        this.nextId = 1;
        // remove(id: number): string {
        //     this.stuffyList.forEach(s => {
        //         if (s.id == id){
        //             let idx: number = this.stuffyList
        //             this.stuffyList.splice(idx,1);
        //         }
        //     });
        // }
    }
    StuffyService.prototype.add = function (stuffy) {
        stuffy.id = this.nextId++;
        this.stuffyList.push(stuffy);
        return "success";
    };
    return StuffyService;
}());
exports.StuffyService = StuffyService;
