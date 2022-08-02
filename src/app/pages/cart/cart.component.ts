import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, map, pipe, Subject } from 'rxjs';
import { ProductService } from 'src/app/services/products/products.service';
import { LoginComponent } from '../login/login.component';
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

	productTotalAmount: number = 0;
	


	products: any = [];
	allproducts: any = 0;
	productQty: any = [];
	amount: number = 899;
	cartDataList: any = [];
	item: any;
	items: any;
	total!: number;
	totalItemNumber: any;

	productCount:any = 0;




	constructor(private cart: CartService,
		private product: ProductService) { }


	ngOnInit(): void {



		this.cart.getProductData().subscribe(res => {

			this.products += res;


			this.products = res;
			for (let product of this.products) {
				this.itemprice = product.ins;

			}

		})

		this.productTotalAmount = this.recalculateTotalAmount();
		console.log(this.products);


		// this.totalItemsCount(this.products);

		this.totalItemCountInc(this.products);

		// this.totalItemCountDec(this.products);

	}

	removeProduct(item: any) {
		this.cart.removeCartData(item);
		// this.cart.removeCartData(item);
		console.log(this.products);

		this.totalItemCountInc(this.products);
		this.recalculateTotalAmount();
	}


	onIncrement(item: any) {

		item.qty = +item.qty + 1;
		this.validateInput = true;

		this.recalculateTotalAmount();

		this.cart.emitAmount.next(this.productTotalAmount);

		this.totalItemCountInc(this.products);


		// this.totalItemsCount(this.products);
		// this.cart.emitQty.next(this.productCount);

	}



	onDecrement(item: any) {

		item.qty = item.qty - 1;
		if (item.qty <= 1) {
			this.validateInput = false;
		}

		this.recalculateTotalAmount();
		this.items = this.cart.emitAmount.next(this.productTotalAmount);
		

		// this.totalItemCountDec(this.products);

		// this.totalItemsCount(this.products);

		this.productCount = this.productCount - 1;

		this.cart.emitQty.next(this.productCount);

		
	}

	recalculateTotalAmount() {

		let newTotalAmount = 0;
		this.products.forEach((item: { ins: number; qty: number; }) => {
			newTotalAmount += (item.ins * item.qty)
			// console.log(item.qty);
			this.items = item.qty;

		});
		// console.log(this.items);

		this.cart.emitAmount.next(newTotalAmount);
		return this.productTotalAmount = newTotalAmount;

	}



	// private totalItemsCount(items: any) {
	// 	const totalCount =
	// 		items
	// 		.filter((item: any) => {
	// 			// this.productCount = +this.productCount +1;

	// 			this.productCount = +this.productCount + item.qty
	// 			console.log(this.productCount);
				
	// 		})

	// }




	private totalItemCountInc(items:any){
		console.log(items);
		this.productCount = 0;
		
		const totalCount =
			items
			.filter((item: any) => {
				this.productCount = +this.productCount + item.qty;
				// console.log(this.productCount);
				
			})

		this.cart.emitQty.next(this.productCount);
	}

}

