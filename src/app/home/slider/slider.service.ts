import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class SliderService {
    Images: any =[];
    promo: any = [];

    constructor(){

    }
   getImages(){
    return this.Images =[
        {
            image1: '../../../assets/img/h4-slide.png',
            image2: '../../../assets/img/h4-slide2.png',
            image3: '../../../assets/img/h4-slide3.png',
            image4: '../../../assets/img/h4-slide4.png'
        }
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