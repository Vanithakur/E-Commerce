import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, catchError, Subject } from "rxjs";
import { Cart } from "src/app/models/cart.model";
import { DisplayCart } from "src/app/models/display-cart.model";
import { ProductService } from "src/app/services/products/products.service";

@Injectable({
    providedIn: 'root'
})


export class CartService implements OnInit{
	
    totalAmount:number =0;
    cartValue:any;
    cartDataList: any = [];
    productList = new BehaviorSubject<any>([]);
    allproducts:any;
    emitAmount = new Subject<any>();
    product:any;
    item: any;
    items: any = [];
    grandTotal :any =[];
    productTotalAmount:any;
    userIdData:any =  0;
    cartQuantity = new Subject<number>();
	// emitQty: any;
    emitQty = new Subject<any>();


    constructor(private products: ProductService, private http: HttpClient) { }
    ngOnInit(): void {

        this.userIdData = localStorage.getItem('userData');
        console.log(this.userIdData);
        
           const user_id = JSON.parse(this.userIdData)
           const userId = user_id.id;		
           const userToken = user_id._token;
        // this.allproducts = this.products.getProducts();
        this.products.getProducts().subscribe(res =>{
            this.allproducts = res.data;
      
        })


        this.product = this.getDisplayCartItems(userId).subscribe(
			res => {
				console.log(res);
			
		 		this.product = res.data;

		 		// console.log(this.products );
			
		 });
    }

    //post api for add to cart

    getAddToCart(user_id:number, product_id:string, quant:number){
        
        return this.http.post<Cart>(
            "http://95.111.202.157/mangoproject/public/api/add-to-card-ustora",{
                user_id: user_id,
                product_id: product_id,
                quant: quant,
                
            }
        )
    }


    //post api for displaying cart items
    getDisplayCartItems(user_id:number){
        console.log(user_id);
        
        return this.http.post<DisplayCart>(
            "http://95.111.202.157/mangoproject/public/api/card-display-ustora", {
                user_id: user_id,
            }
        );
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
    
    // getnewProducts(data: any) {
    //     console.log(data);
    // }

    //add to cart
    addToCart(product: any) {        
        this.cartDataList.push(product);
        this.productList.next(this.cartDataList);

        this.getTotalAmount();
        // console.log(this.cartDataList);
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
            grandTotal += this.cartDataList[i].price;
        }
       
        return grandTotal;
    }

    removeCartData(product: any) {
      
        // this.cartDataList.splice(product, 1);
        // this.productList.next(this.cartDataList.slice());

        // this.productList.next(this.cartDataList)
    }

    gettotal() {
       return this.getTotalAmount();
    }


}

