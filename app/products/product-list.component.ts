import {Component,OnInit} from "angular2/core"
import {ROUTER_DIRECTIVES} from "angular2/router"
import {IProduct} from "./product"
import {StarComponent} from "../shared/star/star.component"
import {ProductFilterPipe} from "./product-filter.pipe"
import {ProductService} from "./product.service"
@Component({
    selector:"pm-products",
    templateUrl:"app/products/product-list.component.html",
     styleUrls:["app/products/product-list.component.css"],
     pipes: [ProductFilterPipe],
     directives:[StarComponent,ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit{
    pageTitle:string = "Product List";
     imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
     listFilter: string ;
     errorMessage: string;
    products:IProduct[] ;
 constructor(private _productService:ProductService){
     
 }
 ngOnInit(): void {
       this._productService.getProducts()
       .subscribe(products => this.products = products,
       error => this.errorMessage=<any>error);
    }
toggleImage():void{
    this.showImage = !this.showImage;
}
onRatingClicked(message:string):void{
    this.pageTitle = "Product List:"+message;
}
}