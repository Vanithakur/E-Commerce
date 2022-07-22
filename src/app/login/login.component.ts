import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'
import { AuthResponseData, AuthService } from './auth.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	isLoginMode = true;
	singupForm:any;
	loginData:any;
	isLoading = false;
	authForm:any;
	error: string | undefined;
    dataSource:any = '';
	constructor(private authService: AuthService, private router: Router ) { }

	ngOnInit(): void {
		this.singupForm = new FormGroup({
			'userData' : new FormGroup({
			'first_name' : new FormControl(null, [Validators.required]),
			'last_name' : new FormControl(null, [Validators.required]),
			'email' : new FormControl(null, [Validators.required, Validators.email]),
			'password': new FormControl(null, [Validators.required])
		  })

		});
		this.loginData = new FormGroup({
		  'loginData' : new FormGroup({
			'email' : new FormControl(null, [Validators.required, Validators.email]),
			'password': new FormControl(null, [Validators.required])
		  })

		});
	}

	onSwitchMode() {
		this.isLoginMode = !this.isLoginMode;
	}

	onSubmit() {
		console.log(this.singupForm.value);
		// console.log(this.loginData.value.loginData.email);
		if (!this.singupForm.valid && !this.loginData.valid) {
			return;
		}
        const first_name = this.singupForm.value.userData.first_name;
		const last_name = this.singupForm.value.userData.last_name;
		const email = this.singupForm.value.userData.email;
		const password = this.singupForm.value.userData.password;

		const email2 = this.loginData.value.loginData.email;		
		const password2 = this.loginData.value.loginData.password;

		let authObs : Observable<AuthResponseData>;

		this.isLoading = true;

		if (this.isLoginMode) {
			console.log(email2);
			
			authObs = this.authService.login(email2,password2)
			console.log(authObs);
			
		
			
		} else {
			authObs = this.authService.signup(first_name, last_name, email, password)
		}

		authObs.subscribe(
			resData => {
				console.log(resData);
				this.isLoading = false;
				this.router.navigate(['/home']);
	

			},
			errorMessage => {
				console.log(errorMessage);
				this.error = errorMessage;					
				this.isLoading = false;
			}
		);
		this.singupForm.reset();
		
	}



}
