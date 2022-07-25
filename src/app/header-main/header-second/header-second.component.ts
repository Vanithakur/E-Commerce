import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/login/auth.service';

@Component({
	selector: 'app-header-second',
	templateUrl: './header-second.component.html',
	styleUrls: ['./header-second.component.css']
})
export class HeaderSecondComponent implements OnInit {
	isAuthenticated: boolean = false;

	private userSub: Subscription = new Subscription;
	constructor(private authService: AuthService) { }

	ngOnInit(): void {
		this.cartItemFunc();

		this.userSub = this.authService.user.subscribe((user: any) => {
			this.isAuthenticated = !!user;
			console.log(this.isAuthenticated);
		});
	}

	cartItem: number = 0;
	cartItemFunc() {
		if (localStorage.getItem('localCart') != null) {
			var cartCount = JSON.parse(localStorage.getItem('localCart') || '{}');
			// console.log(cartCount);
			this.cartItem = cartCount.length;
			
		}
	}

}	
