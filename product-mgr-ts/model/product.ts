export class Product{
    id: number;
    code: string;
    description: string;
    price: number;


    constructor(id: number, code: string, description: string, price:number){
        this.id = id;
        this.code = code;
        this.description = description;
        this.price = price;

    }

    about(): string{
        return "Product:Code = " + this.code + 
        ", Description = " + this.description + 
        ", Price = " + this.price;
    }



}