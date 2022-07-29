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
	totalAmount: any = 0;
	isAuthenticated: boolean = false;
GrandTotal:number =0;
	private userSub: Subscription = new Subscription;
	constructor(private authService: AuthService, private cart: CartService) { }

	ngOnInit(): void {

		
		this.cart.getProductData().subscribe(res => {
			this.totalItemNumber = res.length;
			this.totalAmount = this.cart.getTotalAmount();
			
		});
		this.cart.emitAmount.subscribe(
			res=>{
				this.totalAmount = res;
				
			}
		);
		this.GrandTotal
		// console.log(this.totalAmount);
		

		this.userSub = this.authService.user.subscribe((user: any) => {
			this.isAuthenticated = !!user;
			console.log(this.isAuthenticated);
		});
	}

}	
