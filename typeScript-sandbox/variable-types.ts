class Square{
    side: number;

    constructor(side: number){
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }
}

let sqr: Square = new Square(4);
console.log("area of square = " + sqr.area());


class Customer{
    private _name: string;

    constructor(n:string){
        this._name = n;
    }

    get name(){
        return this._name;
    }
}

function go(a:number = 1, b?: boolean){
    console.log( "a = " + a +", b = ", + b);
}

go(4, true);
go(7);
go();