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
            productId: '1',
            productImage:'assets/img/product-5.jpg',
            productName: 'Samsung gallaxy note 4',
            productprice: '$400.00'
        },
     {  
            productId: '2',
            productImage:'assets/img/product-6.jpg' ,
            productName: 'iPhone 6',
            productprice: '$1200.00',
            compareprice: '$1355.00'
        },
    
        { 
            productId: '3',
            productImage:'assets/img/product-2.jpg' ,
            productName: 'Nokia Lumia 1320',
            productprice: '$899.00',
            compareprice: '$999.00'

         },
      {  
            productId: '4',
            productImage: 'assets/img/product-1.jpg',
            productName: 'Samsung gallaxy note 4',
            productprice: '$400.00'
         },
    
        {
            productId: '5',
             productImage: 'assets/img/product-3.jpg',
             productName: 'Nokia Lumia 1320',
             productprice: '$899.00',
             compareprice: '$999.00'
        },
   
        { 
            productId: '6',
            productImage: 'assets/img/product-4.jpg',
            productName: 'iPhone 6',
            productprice: '$1200.00',
            compareprice: '$1355.00'
        }             
    
       ];
    
       }
}