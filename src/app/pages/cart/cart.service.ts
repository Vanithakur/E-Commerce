import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, catchError, Subject } from "rxjs";
import { Cart } from "src/app/models/cart.model";
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


    constructor(private products: ProductService, private http: HttpClient) { }
    ngOnInit(): void {
        // this.allproducts = this.products.getProducts();
        this.products.getProducts().subscribe(res =>{
            this.allproducts = res.data;
            console.log(this.allproducts);
            
        })
    }

    //post api for add to cart
    getAddToCart(user_id:number, product_id:string, quant:number){
        return this.http.post<Cart>(
            "http://95.111.202.157/mangoproject/public/api/add-to-card-ustora",{
                user_id: user_id,
                product_id: product_id,
                quant: quant,
                // quant_minus?: quant_minus,
            }
        );
           
    }

    //post api for displaying cart items
    getDisplayCartItems(user_id:string){
        return this.http.post<Cart>(
            "http://95.111.202.157/mangoproject/public/apicard-display-ustora", {
                user_id: user_id,
            }
        )
    }

    //get api to remove cart item
    getRemoveCartItem(){
        return this.http.get<Cart>(
            "http://95.111.202.157/mangoproject/public/api/cart-remove-ustora/$id"
        );
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

    gettotal() {
       return this.getTotalAmount();
    }

}

