import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class LatestProductService {
    latestproduct:{} =[];
    brands: {} =[];
    constructor() {

    }
    getLatestProduct() {
        return this.latestproduct = [
            
                { 
                    latestproduct: 'assets/img/product-5.jpg',
                    productName: 'Samsung gallaxy note 4',
                    productprice: '$400.00'
                },
             {  
                    latestproduct: 'assets/img/product-6.jpg' ,
                    productName: 'iPhone 6',
                    productprice: '$1200.00',
                    compareprice: '$1355.00'
                },
            
                { 
                    latestproduct: 'assets/img/product-2.jpg' ,
                    productName: 'Nokia Lumia 1320',
                    productprice: '$899.00',
                    compareprice: '$999.00'

                 },
              {  
                    latestproduct: 'assets/img/product-1.jpg',
                    productName: 'Samsung gallaxy note 4',
                    productprice: '$400.00'
                 },
            
                {
                     latestproduct: 'assets/img/product-3.jpg',
                     productName: 'Nokia Lumia 1320',
                     productprice: '$899.00',
                     compareprice: '$999.00'
                },
           
                { 
                    latestproduct: 'assets/img/product-4.jpg',
                    productName: 'iPhone 6',
                    productprice: '$1200.00',
                    compareprice: '$1355.00'
                }             
            
        ];
    }
    getBrands() {
        return this.brands = [
        "assets/img/brand1.png",
        "assets/img/brand2.png",
        "assets/img/brand3.png",
        "assets/img/brand4.png",
        "assets/img/brand5.png",
        "assets/img/brand6.png",
        "assets/img/brand3.png"
        ]
    }

}