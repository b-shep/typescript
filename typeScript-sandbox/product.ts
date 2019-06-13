export class Product{
    code: string;
    description: string;
    price: number;


    constructor(code: string, description: string, price:number){
        this.code = code;
        this.description = description;
        this.price = price;

    }

    about(): string{
        return "Product:Code = " + this.code + ", Description = " + this.description + ", Price = " + this.price;
    }



}