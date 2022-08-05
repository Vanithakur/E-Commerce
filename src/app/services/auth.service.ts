import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, tap } from "rxjs/operators";
import { BehaviorSubject, Subject, throwError } from "rxjs";

// import { User } from "./user.model";

// import { BehaviorSubject, Subject, throwError } from "rxjs";


import { Router } from "@angular/router";
import { User } from "../models/user.model";
import { CartService } from "../pages/cart/cart.service";

export interface AuthResponseData {
    
    success: boolean;
    message: string;
    data: {
      email: string,
      first_name?: string,
      last_name?: string,
      password?: string,
      id: string,
      token: string,
      userName?: string,
    }

}

@Injectable({ providedIn: "root" })

export class AuthService {
    userIdData:any;
   
    user:any = new BehaviorSubject<User|null>(null);

    constructor(private http: HttpClient, private router: Router, private cart:CartService) { }

    signup(first_name: string, last_name: string, email: string, password: string) {

        return this.http.post<AuthResponseData>(
            'http://95.111.202.157/mangoproject/public/api/signup',
            {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
                // returnSecureToken: true
            }
        ) 
            .pipe(catchError(this.handleError),
                tap(resData => {
                    this.handleAuthentication(
                        resData.data.email,
                        resData.data.id,
                        resData.data.token                      
                    );
                })
            );
    }

    login(email2: string, password2: string) {
        return this.http.post<AuthResponseData>(
            'http://95.111.202.157/mangoproject/public/api/login',
            {               
                email: email2,
                password: password2            
                // returnSecureToken: true
            }
        ).pipe(catchError(this.handleError),
                tap(resData => {                    
                    this.handleAuthentication(
                        resData.data.email,
                        resData.data.id,
                        resData.data.token
                    );
                })
            );
    }

    logout() {
        this.user.next(null);
        this.router.navigate(['/login']);
        localStorage.removeItem('userData');      

        this.cart.emitQty.next(null);
        this.cart.emitAmount.next(null);

    }

  autoLogin() {
    let loginUser:any = localStorage.getItem('userData')
    const userData: {
      email: string;
      id: string;
      _token: string;
    } = JSON.parse(loginUser);
    // console.log(loginUser);
    
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
    );    
    this.user.next(loadedUser);
    
  }
    private handleAuthentication(email: string, userId: string, token: string) {
        const user = new User(
            email,
            userId,
            token
        );

       this.user.next(user);              
       localStorage.setItem('userData', JSON.stringify(user));
    //   localStorage.setItem('userData', JSON.stringify(user));        
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error ouccured!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already!';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist.'
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct.'
                break;
        }
        return throwError(errorMessage);
    }

    // private handleError(errorRes: HttpErrorResponse) {
    //     let errorMessage = 'An error occured!';
        
    //     if (!errorRes.error || !errorRes.error.error) {
    //         return throwError(errorMessage);
    //     }
    //     switch (errorRes.error.error.message) {
    //         case 'EMAIL_EXISTS':
    //             errorMessage = 'This email exists already!';
    //             break;
    //         case 'EMAIL_NOT_FOUND':
    //             errorMessage = 'This email does not exist!';
    //             break;
    //         case 'INVALID_PASSWORD':
    //             errorMessage = 'This password is not correct';
    //             break;
    //     }
    
    //     return throwError(errorMessage);
    // }
}
function getItem(arg0: string): ((this: any, key: string, value: any) => any) | undefined {
    throw new Error("Function not implemented.");
}