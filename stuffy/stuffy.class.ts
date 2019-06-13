export class Stuffy{
    id: number;
    type: string;
    color: string;
    size: string;
    limbs: number;

    constructor(id: number, t:string, c:string, s:string, l:number){
        this.id = id;
        this.type = t;
        this.color = c;
        this.size = s;
        this.limbs = l;
    };

    about(): string{
        return " id = " + this.id + ", type= " + this.type + ", color= " + this.color + ", size= " + this.size + ", limbs = " + this.limbs;
    }
}