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


	// const totalItemsCount = this.cart.items.map(this.item)=> item.qty * this.products.find(p)

	ngOnInit(): void {

	 
		this.cart.getProductData().subscribe(res => {
			
			// this.totalItemNumber = res.length;

			this.totalAmount = this.cart.getTotalAmount();
			
		});
		
		this.cart.emitQty.subscribe(
			(res: any)=> {
				// console.log(res);
				this.totalItemNumber = res;
			}
		);

		

		this.cart.emitAmount.subscribe(
			res=>{
				this.totalAmount = res;
			}
		);
		this.GrandTotal = this.total+this.totalAmount;
		console.log(this.totalAmount);
		

		this.userSub = this.authService.user.subscribe((user: any) => {
			this.isAuthenticated = !!user;
			console.log(this.isAuthenticated);
		});
	}

}	
