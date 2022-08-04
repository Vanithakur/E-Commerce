import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LatestProductService } from 'src/app/services/home-page/latest-product.service';
import { CartService } from '../../cart/cart.service';

@Component({
	selector: 'app-latest-product',
	templateUrl: './latest-product.component.html',
	styleUrls: ['./latest-product.component.css']
})
export class LatestProductComponent implements OnInit {
	userIdData: any;
	products: any = [];
	latestProducts: any = [];
	brands: any = [];

	constructor(
		private latestproduct: LatestProductService,
		private cart: CartService,
		private router: Router) { }

	ngOnInit(): void {
		//to use user_id, product_id and token from localstorage
		this.userIdData = localStorage.getItem('userData');
		console.log(this.userIdData);

		const user_id = JSON.parse(this.userIdData)
		const userId = user_id.id;
		const userToken = user_id._token;


		this.latestproduct.getLatestProduct().subscribe(res => {
			this.latestProducts = res.data;
			console.log(this.latestProducts);

		})
		this.latestproduct.getBrands().subscribe(res => {
			this.brands = res.data
			console.log(this.brands);

		})

		//to display products on cart page
		this.cart.getDisplayCartItems(userId).subscribe(
			res => {
				this.products = res.data;
				console.log(this.products);

			this.cart.getRemoveCartItem(this.products);


			});

		this.cart.totalItemsCount(this.cart.productCount);

	}


	addToCart(item: any) {
		// this.cart.addToCart(item);
		this.router.navigate(['/cart']);

		let product_id = item.id;
		let quant = (item.quantity);

		const user_id = JSON.parse(this.userIdData)
		const userId = user_id.id;
		const userToken = user_id._token;


		this.cart.getAddToCart(userId, product_id, quant).subscribe(
			res => {
				console.log(res);

				item = res.data;
				console.log(item);

			});

		this.cart.getDisplayCartItems(userId).subscribe(res => {

			this.cart.totalItemsCount(res.data);
			this.cart.recalculateTotalAmount(res.data);
		})


	}


	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: false,
		dots: false,
		navSpeed: 300,
		navText: ['<i class="fa fa-angle-left" ></i>', '<i class="fa fa-angle-right" ></i>'],
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 2
			},
			760: {
				items: 3
			},
			1000: {
				items: 4
			},
			1200: {
				items: 5
			}



		},
		nav: true
	}

}
