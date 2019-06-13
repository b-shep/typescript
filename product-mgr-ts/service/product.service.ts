import {Product} from "../model/product.class";

export class ProductService {
    products: Product[] = [];
    nextId = 1;

    initializeList(): void {
        let p1 = new Product(1, "T001","big wet droid", 59.50);
        let p2 = new Product(2, "T002","small dry droid", 29.50);
        let p3 = new Product(3, "T003","medium damp droid", 49.50);

    }
   
    listProducts() {
        this.products.forEach(p => {
            console.log(p.about);
        });
    }

    getProduct(id: number): void {
        let product: Product[] = new Array();
        this.products.forEach(p => {
            if (id == p.id){
                product.push(p);
            }
        });

        if (product.length != 0){
            console.log("Product Found: " + product[0].about);
        } else{
            console.log("No product found for id: " + id);
        }
    }

    addProduct(newProduct: Product){
        this.products.push(newProduct);
    }

    removeById(id: number){
        this.products.forEach(p => {
            if (p.id == id){
                let index: number = this.products.indexOf(p);
                this.products.splice(index,1);
            }
        })
    }





}