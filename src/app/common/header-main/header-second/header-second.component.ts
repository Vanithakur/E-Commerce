import { Component, OnInit } from '@angular/core';
import { filter, map, pipe, Subscription } from 'rxjs';
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
	total:number=0;
    cartDataList: any = [];

	private userSub: Subscription = new Subscription;
	items:any = 0;
	product: any;
	

	constructor(private authService: AuthService, private cart: CartService) {}

	ngOnInit(): void {
		// this.cart.totalItemsCount(this.cart.productCount);
	 
		this.cart.getProductData().subscribe(res => {
			
		});
		
		this.cart.emitQty.subscribe(
			(res: any)=> {
	
				this.totalItemNumber = res;
			}
		);


		this.cart.emitAmount.subscribe(
			res=>{
				this.totalAmount = res;
			}
		);
		

		this.userSub = this.authService.user.subscribe((user: any) => {
			this.isAuthenticated = !!user;

		});
	}


}	
