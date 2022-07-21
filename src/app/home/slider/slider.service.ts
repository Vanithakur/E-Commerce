import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Slider } from "./slider.model";
@Injectable(
    {
        providedIn: 'root'
    }
)
export class SliderService {
    Images: any =[];
    promo: any = [];

    constructor(private http:HttpClient, private router: Router){

    }
getImages() {
    return this.http.get<Slider>("http://95.111.202.157/mangoproject/public/api/shop-banner-show");
}
   getPromo(){
    return this.promo = [
        {
           promo1: '30 Days return',
           promo2: 'Free shipping',
           promo3: 'Secure payments',
           promo4: 'New products'
    
        }
       
    ];
   }
}