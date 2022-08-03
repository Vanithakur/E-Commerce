import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { SliderService } from 'src/app/services/home-page/slider.service';
import { ProductService } from 'src/app/services/products/products.service';
import { CartService } from '../cart/cart.service';
import { Cart } from "src/app/models/cart.model";
import { Router } from '@angular/router';



@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	allproduct: any = [];
	item: any;
	userIdData:any;
	products: any;
	emitQty: any;

	// productList: any;

	constructor(private allproducts: ProductService, private cart:CartService, private router:Router) { }

	ngOnInit(): void {

		this.userIdData = localStorage.getItem('userData');
		console.log(this.userIdData);
		
		

		// this.allproduct = this.allproducts.getProducts();
		// console.log(this.allproduct);
		this.allproducts.getProducts().subscribe(res=>{
			this.allproduct = res.data;
			console.log(this.allproduct);
			
		})

	}

	addToCart(item:any){
		console.log(item);

		// this.cart.emitAmount.next(item);

        // this.cart.emitQty.next(item);
		// this.cart.totalItemsCount(this.products);


		let product_id = item.id;
	
		let quant = (item.quantity);
		// console.log(quant);

		const user_id = JSON.parse(this.userIdData)
		const userId = user_id.id;
		const userToken = user_id._token;
	

		 this.cart.getAddToCart(userId, product_id, quant).subscribe(
			res => {
				console.log(res);
				
				this.item = res.data;
				console.log(this.item);
		
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
