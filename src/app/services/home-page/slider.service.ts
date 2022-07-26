import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Slider } from "src/app/models/slider.model";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class SliderService {
    Images: any =[];
    promo: any = [];
    allProducts:any =[];
    constructor(private http:HttpClient, private router: Router){

    }
    // getImages() {
    //     return this.http.get<Slider>("http://95.111.202.157/mangoproject/public/api/shop-banner-show");
    // }
    getImages() {
        return this.Images = [
            "assets/img/h4-slide.png",
            "assets/img/h4-slide2.png",
            "assets/img/h4-slide3.png",
            "assets/img/h4-slide4.png"

        ];
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