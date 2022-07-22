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
	isLoading = false;
	authForm:any;
	error: string | undefined;
    dataSource:any = '';
	constructor(private authService: AuthService, private router: Router ) { }

	ngOnInit(): void {
		this.authForm = new FormGroup({
			'userData' : new FormGroup({
			'first_name' : new FormControl(null, [Validators.required]),
			'last_name': new FormControl(null, [Validators.required]),
			'email' : new FormControl(null, [Validators.required, Validators.email])
		  })
		});
	}

	onSwitchMode() {
		this.isLoginMode = !this.isLoginMode;
	}

	onSubmit(form: NgForm) {
		if (!form.valid) {
			return;
		}
        const first_name = form.value.first_name;
		const last_name = form.value.last_name;
		const email = form.value.email;
		const password = form.value.password;

		let authObs : Observable<AuthResponseData>;

		this.isLoading = true;

		if (this.isLoginMode) {
			authObs = this.authService.login(email,password)
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
		form.reset();
		
	}



}
