import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-header-third',
  templateUrl: './header-third.component.html',
  styleUrls: ['./header-third.component.css']
})
export class HeaderThirdComponent implements OnInit {
   isnavigate = false;
   isAuthenticated:boolean = false;

	private userSub: Subscription = new Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user: any) => {
			this.isAuthenticated = !!user;
      console.log(this.isAuthenticated);
      
	
		});
  }

}
