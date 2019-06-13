import {Product} from "../model/product.class";
import {ProductService} from "../service/product.service";


export class ProductComponent{
    productSvc: ProductService;

    constructor(productSvc: ProductService){
        this.productSvc = productSvc;
    }

}

let productComp = new ProductComponent(new ProductService());

productComp.productSvc.initializeList();

productComp.productSvc.listProducts();

console.log("Add new product: ");
productComp.productSvc.addProduct(new Product(4, "T004", "shiny mediocre bozo", 76.90));
productComp.productSvc.listProducts();

//remove by id

let id = 2;
productComp.productSvc.removeById(id);
productComp.productSvc.listProducts();