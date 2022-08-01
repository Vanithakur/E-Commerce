import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { ProductService } from "src/app/services/products/products.service";

@Injectable({
    providedIn: 'root'
})


export class CartService implements OnInit{
    accurateQty:any;
	
    totalAmount:number =0;
    cartValue:any;
    cartDataList: any = [];
    productList = new BehaviorSubject<any>([]);
    allproducts:any;
    emitAmount = new Subject<any>();
    item: any;
    items: any = [];
    grandTotal :any =[];
    productTotalAmount:any;

    cartQuantity = new Subject<number>();
	// emitQty: any;
    emitQty = new Subject<any>();


    constructor(private products: ProductService) { }
    ngOnInit(): void {
        this.allproducts = this.products.getProducts();
    }
    
    //get product data
    getProductData() {
        return this.productList.asObservable();
    }

    //set product data
    setProduct(product: any) {
        this.cartDataList.push(...product);
        this.productList.next(product);
        this.getTotalAmount();
    }
    
    getnewProducts(data: any) {
        console.log(data);
    }

    //add to cart
    addToCart(product: any) {        
        this.cartDataList.push(product);
        
        this.productList.next(this.cartDataList);
        this.getTotalAmount();
        console.log(this.cartDataList);

    }

    orderTotal() {

        for (let i = 0; i < this.cartDataList.length; i++) {
            this.grandTotal += this.cartDataList[i].ins;
        }
    }

    //get total amount
    getTotalAmount() {
        // console.log(this.cartDataList.length);

        let grandTotal = 0;
        // return this.cartDataList.length;
        let i;
        for (i = 0; i < this.cartDataList.length; i++) {
            grandTotal += this.cartDataList[i].ins;
        }
       
        return grandTotal;
    }

    removeCartData(product: any) {
      
        this.cartDataList.splice(product, 1);
        this.productList.next(this.cartDataList.slice());
        

        this.productList.next(this.cartDataList)
    }
    

}

