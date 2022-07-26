import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Slider } from "src/app/model/slider.model";

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
   getProducts() {
    return this.allProducts= [
        {
            product1: 'assets/img/product-1.jpg',
            product2: 'assets/img/product-1.jpg',
            product3: 'assets/img/product-1.jpg',
            product4: 'assets/img/product-1.jpg',
            product5: 'assets/img/product-1.jpg',
            product6: 'assets/img/product-1.jpg'
        }

    ];

   }
}