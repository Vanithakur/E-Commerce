import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { orders } from 'src/app/services/orders/orders.service';


@Component({
	selector: 'app-header-first',
	templateUrl: './header-first.component.html',
	styleUrls: ['./header-first.component.css']
})
export class HeaderFirstComponent implements OnInit, OnDestroy {
	isAuthenticated:boolean = false;
	user_id:any;
	private userSub: Subscription = new Subscription;

	constructor(
		private authService: AuthService,
		private orderService : orders,
		private router : Router  ) { }

	ngOnInit(): void {		
		this.userSub = this.authService.user.subscribe((user: any) => {
			this.isAuthenticated = !!user;
	
		});
	}
	onLogout() {
		this.authService.logout();
	}

	ngOnDestroy(): void {
		this.userSub.unsubscribe();
	}
	onOrders(){
		this.router.navigate(["orders"]);

	}
}
