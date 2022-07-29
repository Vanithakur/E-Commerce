import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/pages/cart/cart.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
	selector: 'app-header-second',
	templateUrl: './header-second.component.html',
	styleUrls: ['./header-second.component.css']
})
export class HeaderSecondComponent implements OnInit {
	products:any;
	allproducts:any;
	totalItemNumber: number = 0;
	totalAmount: number = 0;
	isAuthenticated: boolean = false;

	private userSub: Subscription = new Subscription;
	constructor(private authService: AuthService, private cart: CartService) { }

	ngOnInit(): void {
		// this.totalAmount = this.cart.getTotalAmount();
		// console.log(this.totalAmount );


		this.cart.getProductData().subscribe(res => {
			this.totalItemNumber = res.length;
		});

		// this.cart.recalculateTotalAmount().subscribe((res: { newTotalAmount: number; }) => {
		// 	this.totalAmount = res.newTotalAmount;
		// 	console.log();
			
		// });

		// console.log(this.cart.recalculateTotalAmount());


		// this.cartItemFunc();

		this.userSub = this.authService.user.subscribe((user: any) => {
			this.isAuthenticated = !!user;
			console.log(this.isAuthenticated);
		});
	}
      recalculateTotalAmount() {
			let newTotalAmount = 0;
			this.products.forEach((item: { ins: number; qty: number; }) => {
				newTotalAmount += (item.ins * item.qty)
				// this.totalItemNumber = item.qty;
				// console.log(item.qty);

			});
			
			// console.log(this.totalItemNumber);
			console.log(newTotalAmount);

			return this.totalAmount = newTotalAmount;


	}


}	
