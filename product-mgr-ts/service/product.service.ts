import {Product} from "../model/product";

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
        
    }
}