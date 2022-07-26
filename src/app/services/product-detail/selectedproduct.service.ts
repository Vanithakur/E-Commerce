import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class SelectedProductService {
    product:{} = [];
    constructor() {

    }
    getSelectedProduct() {
        return this.product = [
            {
                image: "assets/img/product-2.jpg",
                thumbs: {
                    thumb1:'assets/img/product-thumb-1.jpg',
                    thumb2:'assets/img/product-thumb-2.jpg',
                    thumb3:'assets/img/product-thumb-3.jpg'
                },
                productname: 'Sony Smart TV - 2015',
                productprice: '$700.00',
                compareprice: '$100.00',
                Category: 'Summer',
                Tags: ['awesome','best','sale','shoes'],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique,diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus exaliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissimporta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodalesnisl. Aliquam eget dolor eget elit malesuada aliquet. In varius loremlorem, semper bibendum lectus lobortis ac."

            }
        ];

    }
}