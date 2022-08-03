import {
<<<<<<< HEAD
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, Observable, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        let data:any = user;
        console.log(data);
        
        if (!user) {
          return next.handle(req);
        }
        const modRequest = req.clone({
          setHeaders: {
            Authorization: 'Bearer ' + data.token,
          },
        });
        return next.handle(modRequest);
      })
    );
  }
}
