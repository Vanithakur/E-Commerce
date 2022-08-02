import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Products } from "src/app/models/products.model";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class ProductService {
    allProducts: any = [];

    constructor(private http: HttpClient, private router: Router) { }


    getProducts() {
        return this.http.get<Products>("http://95.111.202.157/mangoproject/public/api/ustora-all-product");
    }

    
}