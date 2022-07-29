import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ProductService } from "src/app/services/products/products.service";

@Injectable({
    providedIn: 'root'
})


export class CartService implements OnInit{
    accurateQty:any;
	forEach(arg0: (cart: any) => void) {
		throw new Error('Method not implemented.');
	}

    cartDataList: any = [];
    productList = new BehaviorSubject<any>([]);
    allproducts:any;
    item: any;
    grandTotal :any =[];
    productTotalAmount:any;

    constructor(private products: ProductService) { }
ngOnInit(): void {
    this.allproducts = this.products.getProducts();
}
    //get product data
    getProductData() {
     this.productList.asObservable().subscribe(res=>{
       this.allproducts = res;
        
     });
     return this.productList.asObservable();
    }

    //set product data
    setProduct(product: any) {
        this.cartDataList.push(...product);
        this.productList.next(product);
    this.getTotalAmount();


    }
    getnewProducts(data:any) {
        console.log(data);
        

    }
    //add to cart
    addToCart(product: any) {        
        this.cartDataList.push(product);
        
        this.productList.next(this.cartDataList);
        this.getTotalAmount();
        console.log(this.cartDataList);

    }
    orderTotal(){
       
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
        // console.log(grandTotal);

        return grandTotal;
     }
   
    //remove a cart product
    removeCartData(product: any) {
        // console.log(product);
        this.cartDataList.splice(product, 1);
        this.productList.next(this.cartDataList.slice());

        this.productList.next(this.cartDataList)
    }
    increment(item: any){
        item.qty = +item.qty + 1;	
        this.recalculateTotalAmount();
    }
    decrement(item: any){

		item.qty = item.qty - 1;
		if (item.qty <= 1) {
			
		}

        this.recalculateTotalAmount();
    
    }
    
    recalculateTotalAmount() {
        let newTotalAmount = 0;
        this.allproducts.forEach((item: { ins: number; qty: number; }) => {
            newTotalAmount += (item.ins * item.qty)
            console.log(item.qty);

        });
        // console.log(this.productTotalAmount);
        console.log(newTotalAmount);

        return this.productTotalAmount = newTotalAmount;


}

}

