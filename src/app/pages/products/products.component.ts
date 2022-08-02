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
		// this.allproduct = this.allproducts.getProducts();
		// console.log(this.allproduct);
		this.allproducts.getProducts().subscribe(res=>{
			this.allproduct = res.data;
			console.log(this.allproduct);
			
		})
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
	
	



}
