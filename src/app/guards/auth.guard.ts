import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take, tap } from "rxjs";
import { AuthService } from "../services/auth.service";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ):
        | boolean
        | UrlTree
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> {
        return this.authService.user.pipe( take(1), map( user => {
          console.log(user);
          const isAuth = !!user;
            console.log(user);
    
          if (isAuth) {
            return true;
          }
          return(this.router.createUrlTree(['/login']))
        }));
      }
    constructor(private authService: AuthService, private router: Router) { }

    // canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    //     // return this.authService.user.pipe(
    //     //     take(1),
    //     //     map(user => {
    //     //         console.log(user);
                
    //     //     const isAuth = !!user
    //     //     if(isAuth){
    //     //         return true;
    //     //     }
    //     //     return this.router.createUrlTree(['/login'])
    //     // })
    //     // );

    //     return this.authService.user.pipe(
    //         take(1),
    //         map(user => {
    //             let dataguard = user;
    //             console.log(dataguard);
                
    //         const isAuth = !!user
    //         console.log(isAuth);
            
    //         if(isAuth){
    //             console.log(isAuth);
                
    //             return true;
    //         }
    //         return this.router.createUrlTree(['/login'])
    //     }),
    //     //  tap(isAuth => {
    //     //     if(!isAuth){
    //     //         this.router.navigate(['/auth']);
    //     //     }
    //     // })
    //     );
    // }
}