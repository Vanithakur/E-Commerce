import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class RelatedProductService {
    relatedProduct = [];
    constructor() {}
    getRelatedProduct() {
        return this.relatedProduct = [

        ];
    }

}