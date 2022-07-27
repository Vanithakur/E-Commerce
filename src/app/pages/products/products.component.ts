import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SliderService } from 'src/app/services/home-page/slider.service';
import { ProductService } from 'src/app/services/products/products.service';
import { CartService } from '../cart/cart.service';




@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	allproduct: any = [];
	// productList: any;

	constructor(private allproducts: ProductService, private cart:CartService) { }

	ngOnInit(): void {
		this.allproduct = this.allproducts.getProducts();
		console.log(this.allproduct);

		// this.productList.forEach((a:any) => {
		// 	Object.assign(a,{quantity:1, total:a.price})
		// });
	}

	addToCart(item:any){
		this.cart.addToCart(item);
		console.log(item);
		
		
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
	
	// itemsCart: any = [];

	// addCart(category: any) {
	// 	console.log(category);
	// 	let cartDataNull = localStorage.getItem('localCart');

	// 	if (cartDataNull = null) {
	// 		let storeDataGet: any = [];
	// 		storeDataGet.push(category);
	// 		localStorage.setItem('localCart', JSON.stringify(storeDataGet));
	// 	} else {
	// 		var id = category.prodID;
	// 		let index: number = -1;
	// 		this.itemsCart = JSON.parse(localStorage.getItem('localCart') || '{}');
	// 		for (let i = 0; i < this.itemsCart.length; i++) {
	// 			if (parseInt(id) === parseInt(this.itemsCart[i].prodID)) {
	// 				this.itemsCart[i].qty = category.qty;
	// 				index = i;
	// 				break;
	// 			}
	// 			if (index == -1) {
	// 				this.itemsCart.push(category);
	// 				localStorage.setItem('localCart', JSON.stringify(category));
	// 			} else {
	// 				localStorage.setItem('localCart', JSON.stringify(category));
	// 			}
	// 		}

	// 	}

	// }



}
