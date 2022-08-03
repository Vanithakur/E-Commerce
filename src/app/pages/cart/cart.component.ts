import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, map, pipe, Subject } from 'rxjs';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';
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
	data: any;
	items: any;
	total!: number;
	totalItemNumber: any;
	userIdData: any;
	// productCount:any = 0;
	user_id: any;

	constructor(private cart: CartService,
		private product: ProductService, 
		private router: Router,
		private checkoutService : CheckoutService) { }


	ngOnInit(): void {
		//  this.productTotalAmount = this.cart.productTotalAmount;

		this.cart.emitAmount.subscribe(res => {
			console.log(res);
			this.productTotalAmount = res;
		});


		this.userIdData = localStorage.getItem('userData');
		console.log(this.userIdData);

		const user_id = JSON.parse(this.userIdData)
		const userId = user_id.id;
		const userToken = user_id._token;


		this.cart.getProductData().subscribe(res => {



			this.products += res;
			console.log(res);

			this.products = res;

			for (let product of this.products) {
				this.itemprice = product.price;
			}

		});


		//for displaying items at cart page

		this.products = this.cart.getDisplayCartItems(userId).subscribe(
			res => {
				this.products = res.data;
				console.log(this.products);
<<<<<<< HEAD

			});


		// this.cart.totalItemsCount(this.products);
		// this.totalItemsCount(this.products);

		this.cart.totalItemsCount(this.cart.productCount);

		
=======
				
			 });				
		// this.totalItemCountInc(this.products);
		this.totalItemsCount(this.products);
>>>>>>> a2c09f41973b7a1fa13257e84122d494b7973091
	}


	removeProduct(item: any) {

		const user_id = JSON.parse(this.userIdData)
		const userId = user_id.id;
		console.log(item);

		this.cart.getRemoveCartItem(item).subscribe(
			res => {
				// console.log(res);

				this.data = res.data;
				console.log(this.data);
<<<<<<< HEAD

				this.cart.getDisplayCartItems(userId).subscribe(
					res => {
						this.products = res.data;
						console.log(this.products);

						this.cart.recalculateTotalAmount(this.products);
					this.cart.totalItemsCount(this.products);
		
					});

			});

=======
		
			});
		// this.cart.removeCartData(item);

		this.totalItemsCount(this.products);
		this.recalculateTotalAmount();
>>>>>>> a2c09f41973b7a1fa13257e84122d494b7973091
		

	}


	onIncrement(item: any) {

		item.quant = +item.quant + 1;
		this.validateInput = true;

		this.cart.recalculateTotalAmount(this.products);

<<<<<<< HEAD
		// this.cart.emitAmount.next(this.productTotalAmount);

		this.cart.totalItemsCount(this.products);
=======
>>>>>>> a2c09f41973b7a1fa13257e84122d494b7973091
	}


	onDecrement(item: any) {

		item.quant = item.quant - 1;
		if (item.quant <= 1) {
			this.validateInput = false;
		}

<<<<<<< HEAD
		this.cart.recalculateTotalAmount(this.products);
		// this.items = this.cart.emitAmount.next(this.productTotalAmount);
		this.cart.totalItemsCount(this.products);

	}
=======
		this.recalculateTotalAmount();
		this.items = this.cart.emitAmount.next(this.productTotalAmount);
		this.productCount = this.productCount - 1;
>>>>>>> a2c09f41973b7a1fa13257e84122d494b7973091


	// recalculateTotalAmount() {

	// 	let newTotalAmount = 0;
	// 	this.products.forEach((item: { price: number; quant: number; }) => {
	// 		newTotalAmount += (item.price * item.quant)
	// 		// console.log(item.qty);
	// 		this.items = item.quant;

	// 	});
	// 	// console.log(this.items);

	// 	this.cart.emitAmount.next(newTotalAmount);

	// 	return this.productTotalAmount = newTotalAmount;

<<<<<<< HEAD
	// }

=======
	}
	
	private totalItemsCount(items: any) {
				const totalCount =
					items
					.filter((item: any) => {
						// this.productCount = +this.productCount +1;
		
						this.productCount = +this.productCount + +item.quant
						// console.log(this.productCount);
						// console.log(item);

						
					})
					this.cart.emitQty.next(this.productCount);
>>>>>>> a2c09f41973b7a1fa13257e84122d494b7973091


<<<<<<< HEAD
	onCheckout() {
		this.productTotalAmount;
=======
	onCheckout(amount:any) {
	 this.checkoutService.totalfinalAmount = amount;
	 
>>>>>>> a2c09f41973b7a1fa13257e84122d494b7973091
		this.router.navigate(["/checkout"]);
	}

}













