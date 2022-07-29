import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from 'src/app/services/products/products.service';
import { CartService } from './cart.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	itemprice: number = 0;
	itemqty: number = 0;
	validateInput: boolean = false;

	productTotalAmount: number =0;

	products: any = [];
	allproducts: any = 0;
	productQty: any = [];
	amount: number = 899;
	cartDataList: any = [];
	item: any;
	total!: number;

	 

	constructor(private cart: CartService,
		private product: ProductService) { }


	ngOnInit(): void {


		this.cart.getProductData().subscribe(res => {
			

			 this.products = res;
			for (let product of this.products) {
				this.itemprice = product.ins;

			}
			this.allproducts = this.recalculateTotalAmount();
	
			
			

		})
		this.productQty = this.product.getProducts();
		for (let product of this.productQty) {
			// console.log(product.qty);

		}

		// this.productTotalAmount = this.products.ins;
	}

	removeProduct(item: any) {
		console.log(item);
		this.cart.removeCartData(item);
		// this.cart.removeCartData(item);
	}



	// 	validateInput( item:any) {	
	// console.log(item);


	// 		const qty = +item.qty;
	// 		console.log(qty);

	// 		if(qty<1){
	// 			this.item.qty;
	// 			console.log(item.value);

	// 			return;
	// 		} else {
	// 			this.onIncrement(this.item);
	// 		}


	// 	}

	onIncrement(item: any) {

		item.qty = +item.qty + 1;

		this.recalculateTotalAmount();

		this.validateInput =true;

		// this.onUpdate(this.item);

	}



	onDecrement(item: any) {

		item.qty = item.qty - 1;
		if (item.qty <= 1) {
			this.validateInput = false;
		}

		this.recalculateTotalAmount();
		// this.onUpdate(this.item);


	}


	// onUpdate() {
	// 	console.log(this.item.qty);
	// 	// this.itemqty = this.onIncrement();
	// 	console.log(this.itemprice);


	// 	this.itemprice = this.itemprice * this.item.qty;
	// 	console.log(this.itemprice);


	// 	// let subs = 0;
	// 	//  for(const item of this.products){
	// 	// 	subs += item.ins * item.qty;

	// 	// 	this.total =  subs;
	// 	//  }

	// }

	recalculateTotalAmount() {
	
    

		let newTotalAmount = 0;
		this.products.forEach( (item: { ins: number; qty: number; }) => {
			newTotalAmount += (item.ins* item.qty)
			console.log(item.qty);
			
		});
		this.productTotalAmount = newTotalAmount;
		console.log(this.productTotalAmount);
		
	}

	
}
