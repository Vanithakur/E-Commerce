import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './cart.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	products: any = [];
	allproducts: any = 0;
	item: any;
	// public allproducts !:number; 

	constructor(private cart: CartService) { }


	ngOnInit(): void {
		this.cart.getProductData().subscribe(res => {
			this.products = res;
			this.allproducts = this.cart.getTotalAmount();
			// console.log(this.allproducts);

		})
	}

	removeProduct(item: any) {
		console.log(item);
		this.cart.removeCartData(item);
		// this.cart.removeCartData(item);
	}


	onIncrement(item: any) {
		this.item.qty = +this.item.qty + 1;
		console.log(item);
	}

}
