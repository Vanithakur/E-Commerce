import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})


export class CartService {
    accurateQty: any;
    forEach(arg0: (cart: any) => void) {
        throw new Error('Method not implemented.');
    }

    cartDataList: any = [];
    productList = new BehaviorSubject<any>([]);
    newTotalAmount = new BehaviorSubject<any>([]);

    item: any;
    grandTotal: any = [];

    constructor() { }

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

    recalculateTotalAmount() {

		let newTotalAmount = 0;
		this.cartDataList.length.forEach( (item: { ins: number; qty: number; }) => {
			newTotalAmount += (item.ins* item.qty)
			// console.log(newTotalAmount);

    	});
        // return newTotalAmount;
        // console.log(this.newTotalAmount.asObservable());
        return this.newTotalAmount.asObservable();

    }

}

