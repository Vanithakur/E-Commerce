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

	products: any = [];
	allproducts: any = 0;
	productQty: any = [];
	
	// public allproducts !:number; 

	constructor(private cart: CartService,
		private product: ProductService) { }


	ngOnInit(): void {
		this.cart.getProductData().subscribe(res => {
			this.products = res;
			this.allproducts = this.cart.getTotalAmount();
			// console.log(this.allproducts);

		})
		this.productQty = this.product.getProducts();
		for (let product of this.productQty) {
			console.log(product.qty);

		}


	}

	removeProduct(item: any) {
		// console.log(item);
		this.cart.removeCartData(item);
		// this.cart.removeCartData(item);
	}


	onIncrement(item: any) {

		// console.log(product.qty);
		// product.qty = +product.qty + 1;
		// console.log(product.qty );      
	}

}
