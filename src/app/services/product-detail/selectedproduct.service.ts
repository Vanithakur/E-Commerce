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
                id: '1',
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

            },
            {
                id: '2',
                image: "assets/img/product-1.jpg",
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

            },
            {
                id: '3',
                image: "assets/img/product-3.jpg",
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

            },
            {
                id: '4',
                image: "assets/img/product-4.jpg",
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

            },
            {
                id: '5',
                image: "assets/img/product-5.jpg",
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

            },
            {
                id: '6',
                image: "assets/img/product-6.jpg",
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

            },
            {
                id: '7',
                image: "assets/img/product-7.jpg",
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

            },
            {
                id: '8',
                image: "assets/img/product-8.jpg",
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

            },
            {
                id: '9',
                image: "assets/img/product-9.jpg",
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

            },
            {
                id: '10',
                image: "assets/img/product-10.jpg",
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

            },

            {
                id: '11',
                image: "assets/img/product-11.jpg",
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

            },
            {
                id: '12',
                image: "assets/img/product-12.jpg",
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

            },

        ];

    }
}