import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/login/auth.service';

@Component({
	selector: 'app-header-first',
	templateUrl: './header-first.component.html',
	styleUrls: ['./header-first.component.css']
})
export class HeaderFirstComponent implements OnInit, OnDestroy {
	isAuthenticated:boolean = false;

	private userSub: Subscription = new Subscription;

	constructor(private authService: AuthService) { }

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
}
