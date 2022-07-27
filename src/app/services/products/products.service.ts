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
                prodID: 1,
                img: "../../assets/img/product-2.jpg",
                name: "Apple new mac book 2015 March :P",
                ins: "$899.00",
                del: "$999.00",
                qty: 1
            },
            {
                prodID: 2,
                img: "assets/img/product-1.jpg",
                name: "Apple new mac book 2015 March :P",
                ins: "$899.00",
                del: "$999.00",
                qty: 1
            },
            {
                prodID: 3,
                img: "../../assets/img/product-3.jpg",
                name: "Apple new mac book 2015 March :P",
                ins: "$899.00",
                del: "$999.00",
                qty: 1
            },
            {
                prodID: 4,
                img: "../../assets/img/product-4.jpg",
                name: "Apple new mac book 2015 March :P",
                ins: "$899.00",
                del: "$999.00",
                qty: 1
            },
            {
                prodID: 5,
                img: "../../assets/img/product-2.jpg",
                name: "Apple new mac book 2015 March :P",
                ins: "$899.00",
                del: "$999.00",
                qty: 1
            },
            {
                prodID: 6,
                img: "../../assets/img/product-1.jpg",
                name: "Apple new mac book 2015 March :P",
                ins: "$899.00",
                del: "$999.00",
                qty: 1
            },
            {
                prodID: 7,
                img: "../../assets/img/product-3.jpg",
                name: "Apple new mac book 2015 March :P",
                ins: "$899.00",
                del: "$999.00",
                qty: 1
            },
            {
                prodID: 8,
                img: "../../assets/img/product-4.jpg",
                name: "Apple new mac book 2015 March :P",
                ins: "$899.00",
                del: "$999.00",
                qty: 1
            },
            {
                prodID: 9,
                img: "../../assets/img/product-2.jpg",
                name: "Apple new mac book 2015 March :P",
                ins: "$899.00",
                del: "$999.00",
                qty: 1
            },
            {
                prodID: 10,
                img: "../../assets/img/product-1.jpg",
                name: "Apple new mac book 2015 March :P",
                ins: "$899.00",
                del: "$999.00",
                qty: 1
            },
            {
                prodID: 11,
                img: "../../assets/img/product-3.jpg",
                name: "Apple new mac book 2015 March :P",
                ins: "$899.00",
                del: "$999.00",
                qty: 1
            },
            {
                prodID: 12,
                img: "../../assets/img/product-4.jpg",
                name: "Apple new mac book 2015 March :P",
                ins: "$899.00",
                del: "$999.00",
                qty: 1
            }
       ];
    
       }
}