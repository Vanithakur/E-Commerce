import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/services/products/products.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.css']
})
export class RelatedProductComponent implements OnInit {
relatedproducts:any =[];
products:any =[];
  constructor(
	private allproduct: ProductService,
	private cart : CartService,
	private router : Router) { }

  ngOnInit(): void {
	this.allproduct.getProducts().subscribe(res => {
		console.log(res.data);
		this.products = res.data;
	})
  }
  addToCart(item:any){
	this.cart.addToCart(item);		  
this.router.navigate(['/cart']);
	
}
  customOptions: OwlOptions = {
		loop: true,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		dots: false,
		navSpeed: 300,
		navText: ['<i class="fa fa-angle-left" ></i>', '<i class="fa fa-angle-right" ></i>'],
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 3
			},
			760: {
				items: 3
			},
			1000: {
				items: 4
			},

			1200: {
				items: 5
			},
		},
		nav: true
	}

}
