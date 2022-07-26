import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class ProductService {
    allProducts:any =[];
    constructor(private http:HttpClient, private router: Router){

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