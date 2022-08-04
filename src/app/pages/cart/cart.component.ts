import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
	productCount:any = 0;
	user_id: any;

	constructor(private cart: CartService,

		private product: ProductService, 
		private router: Router,
		private route: ActivatedRoute,
		private checkoutService : CheckoutService) { }



	ngOnInit(): void {


		//to emit amount in the cart totals
		this.cart.emitAmount.subscribe(res => {
			this.productTotalAmount = res;
		})


		//to use user_id, product_id and token from localstorage
		this.userIdData = localStorage.getItem('userData');
		console.log(this.userIdData);

		const user_id = JSON.parse(this.userIdData)
		const userId = user_id.id;
		const userToken = user_id._token;


		//to get the data of all products being added
		this.cart.getProductData().subscribe(res => {

			this.products += res;
			console.log(res);

			this.products = res;

			for (let product of this.products) {
				this.itemprice = product.price;
			}

			this.cart.getRemoveCartItem(this.products);
		});


		//for displaying items at cart page
		this.cart.getDisplayCartItems(userId).subscribe(
			res => {
				this.products = res.data;
				console.log(this.products);

			// this.cart.getRemoveCartItem(this.products);


			});

		//for displaying total product count in header cart
		this.cart.totalItemsCount(this.cart.productCount);

	}

	//to remove product from cart
	removeProduct(item: any) {
		// console.log(item);=> product_id of product being remoived

		this.cart.getRemoveCartItem(item).subscribe(
			res => {
				console.log(res);

				this.data = res.data;
				console.log(this.data);

				this.cart.recalculateTotalAmount(this.products);
				this.cart.totalItemsCount(this.products);

			});
		// this.cart.removeCartData(item);	
		this.cart.getRemoveCartItem(item.cart_id);

	}


	onIncrement(item: any) {

		item.quant = +item.quant + 1;
		this.validateInput = true;

		this.cart.recalculateTotalAmount(this.products);

		// this.cart.emitAmount.next(this.productTotalAmount);

		this.cart.totalItemsCount(this.products);
	}


	onDecrement(item: any) {

		item.quant = item.quant - 1;
		if (item.quant <= 1) {
			this.validateInput = false;
		}

		this.cart.recalculateTotalAmount(this.products);
		// this.items = this.cart.emitAmount.next(this.productTotalAmount);
		this.cart.totalItemsCount(this.products);

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

		
			}

	onCheckout(amount:any) {
	 this.checkoutService.totalfinalAmount = amount;
	//  this.router.navigate(['checkout'], {relativeTo: this.route});
		this.router.navigate(["checkout"]);

	}


}













