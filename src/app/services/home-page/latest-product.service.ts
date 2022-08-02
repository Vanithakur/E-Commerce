import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Brands } from "src/app/models/Brands.model";
import { LatestProduct } from "src/app/models/latest.model";

@Injectable({
    providedIn:'root'
})
export class LatestProductService {
    latestproduct:{} =[];
    brands: {} =[];
    constructor(private http:HttpClient) {

    }
    getBrands() {
        return this.http.get<Brands>("http://95.111.202.157/mangoproject/public/api/ustora-category");   
    }
    getLatestProduct() {
        return this.http.get<LatestProduct>("http://95.111.202.157/mangoproject/public/api/ustora-all-product");
    //     return this.latestproduct = [
    //             {
    //                 prodID: 1,
    //                 img: "../../assets/img/product-2.jpg",
    //                 name: "Apple new mac book 2015 March :P",
    //                 ins: 899.00,
    //                 del: 999.00,
    //                 qty: 1,
    //                 thumbs: {
    //                     thumb1:'assets/img/product-thumb-1.jpg',
    //                     thumb2:'assets/img/product-thumb-2.jpg',
    //                     thumb3:'assets/img/product-thumb-3.jpg'
    //                 },
    //                 Tags: ['awesome','best','sale','shoes'],
    //                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique,diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus exaliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissimporta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodalesnisl. Aliquam eget dolor eget elit malesuada aliquet. In varius loremlorem, semper bibendum lectus lobortis ac."
    //             },
    //             {
    //                 prodID: 2,
    //                 img: "assets/img/product-1.jpg",
    //                 name: "Apple new mac book 2015 March :P",
    //                 ins: 899.00,
    //                 del: 999.00,
    //                 qty: 1,
    //                 thumbs: {
    //                     thumb1:'assets/img/product-thumb-1.jpg',
    //                     thumb2:'assets/img/product-thumb-2.jpg',
    //                     thumb3:'assets/img/product-thumb-3.jpg'
    //                 },
    //                 Tags: ['awesome','best','sale','shoes'],
    //                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique,diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus exaliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissimporta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodalesnisl. Aliquam eget dolor eget elit malesuada aliquet. In varius loremlorem, semper bibendum lectus lobortis ac."
    //             },
    //             {
    //                 prodID: 3,
    //                 img: "../../assets/img/product-3.jpg",
    //                 name: "Apple new mac book 2015 March :P",
    //                 ins: 899.00,
    //                 del: 999.00,
    //                 qty: 1,
    //                 thumbs: {
    //                     thumb1:'assets/img/product-thumb-1.jpg',
    //                     thumb2:'assets/img/product-thumb-2.jpg',
    //                     thumb3:'assets/img/product-thumb-3.jpg'
    //                 },
    //                 Tags: ['awesome','best','sale','shoes'],
    //                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique,diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus exaliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissimporta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodalesnisl. Aliquam eget dolor eget elit malesuada aliquet. In varius loremlorem, semper bibendum lectus lobortis ac."
    //             },
    //             {
    //                 prodID: 4,
    //                 img: "../../assets/img/product-4.jpg",
    //                 name: "Apple new mac book 2015 March :P",
    //                 ins: 899.00,
    //                 del: 999.00,
    //                 qty: 1,
    //                 thumbs: {
    //                     thumb1:'assets/img/product-thumb-1.jpg',
    //                     thumb2:'assets/img/product-thumb-2.jpg',
    //                     thumb3:'assets/img/product-thumb-3.jpg'
    //                 },
    //                 Tags: ['awesome','best','sale','shoes'],
    //                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique,diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus exaliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissimporta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodalesnisl. Aliquam eget dolor eget elit malesuada aliquet. In varius loremlorem, semper bibendum lectus lobortis ac."
    //             },
    //             {
    //                 prodID: 5,
    //                 img: "../../assets/img/product-2.jpg",
    //                 name: "Apple new mac book 2015 March :P",
    //                 ins: 899.00,
    //                 del: 999.00,
    //                 qty: 1,
    //                 thumbs: {
    //                     thumb1:'assets/img/product-thumb-1.jpg',
    //                     thumb2:'assets/img/product-thumb-2.jpg',
    //                     thumb3:'assets/img/product-thumb-3.jpg'
    //                 },
    //                 Tags: ['awesome','best','sale','shoes'],
    //                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique,diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus exaliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissimporta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodalesnisl. Aliquam eget dolor eget elit malesuada aliquet. In varius loremlorem, semper bibendum lectus lobortis ac."
    //             },
    //             {
    //                 prodID: 6,
    //                 img: "../../assets/img/product-1.jpg",
    //                 name: "Apple new mac book 2015 March :P",
    //                 ins: 899.00,
    //                 del: 999.00,
    //                 qty: 1,
    //                 thumbs: {
    //                     thumb1:'assets/img/product-thumb-1.jpg',
    //                     thumb2:'assets/img/product-thumb-2.jpg',
    //                     thumb3:'assets/img/product-thumb-3.jpg'
    //                 },
    //                 Tags: ['awesome','best','sale','shoes'],
    //                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique,diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus exaliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissimporta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodalesnisl. Aliquam eget dolor eget elit malesuada aliquet. In varius loremlorem, semper bibendum lectus lobortis ac."
    //             },
    //             {
    //                 prodID: 7,
    //                 img: "../../assets/img/product-3.jpg",
    //                 name: "Apple new mac book 2015 March :P",
    //                 ins: 899.00,
    //                 del: 999.00,
    //                 qty: 1,
    //                 thumbs: {
    //                     thumb1:'assets/img/product-thumb-1.jpg',
    //                     thumb2:'assets/img/product-thumb-2.jpg',
    //                     thumb3:'assets/img/product-thumb-3.jpg'
    //                 },
    //                 Tags: ['awesome','best','sale','shoes'],
    //                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique,diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus exaliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissimporta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodalesnisl. Aliquam eget dolor eget elit malesuada aliquet. In varius loremlorem, semper bibendum lectus lobortis ac."
    //             },
    //             {
    //                 prodID: 8,
    //                 img: "../../assets/img/product-4.jpg",
    //                 name: "Apple new mac book 2015 March :P",
    //                 ins: 899.00,
    //                 del: 999.00,
    //                 qty: 1,
    //                 thumbs: {
    //                     thumb1:'assets/img/product-thumb-1.jpg',
    //                     thumb2:'assets/img/product-thumb-2.jpg',
    //                     thumb3:'assets/img/product-thumb-3.jpg'
    //                 },
    //                 Tags: ['awesome','best','sale','shoes'],
    //                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique,diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus exaliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissimporta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodalesnisl. Aliquam eget dolor eget elit malesuada aliquet. In varius loremlorem, semper bibendum lectus lobortis ac."
    //             },
    //             {
    //                 prodID: 9,
    //                 img: "../../assets/img/product-2.jpg",
    //                 name: "Apple new mac book 2015 March :P",
    //                 ins: 899.00,
    //                 del: 999.00,
    //                 qty: 1,
    //                 thumbs: {
    //                     thumb1:'assets/img/product-thumb-1.jpg',
    //                     thumb2:'assets/img/product-thumb-2.jpg',
    //                     thumb3:'assets/img/product-thumb-3.jpg'
    //                 },
    //                 Tags: ['awesome','best','sale','shoes'],
    //                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique,diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus exaliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissimporta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodalesnisl. Aliquam eget dolor eget elit malesuada aliquet. In varius loremlorem, semper bibendum lectus lobortis ac."
    //             },
    //             {
    //                 prodID: 10,
    //                 img: "../../assets/img/product-1.jpg",
    //                 name: "Apple new mac book 2015 March :P",
    //                 ins: 899.00,
    //                 del: 999.00,
    //                 qty: 1,
    //                 thumbs: {
    //                     thumb1:'assets/img/product-thumb-1.jpg',
    //                     thumb2:'assets/img/product-thumb-2.jpg',
    //                     thumb3:'assets/img/product-thumb-3.jpg'
    //                 },
    //                 Tags: ['awesome','best','sale','shoes'],
    //                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique,diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus exaliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissimporta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodalesnisl. Aliquam eget dolor eget elit malesuada aliquet. In varius loremlorem, semper bibendum lectus lobortis ac."
    //             },
    //             {
    //                 prodID: 11,
    //                 img: "../../assets/img/product-3.jpg",
    //                 name: "Apple new mac book 2015 March :P",
    //                 ins: 899.00,
    //                 del: 999.00,
    //                 qty: 1,
    //                 thumbs: {
    //                     thumb1:'assets/img/product-thumb-1.jpg',
    //                     thumb2:'assets/img/product-thumb-2.jpg',
    //                     thumb3:'assets/img/product-thumb-3.jpg'
    //                 },
    //                 Tags: ['awesome','best','sale','shoes'],
    //                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique,diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus exaliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissimporta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodalesnisl. Aliquam eget dolor eget elit malesuada aliquet. In varius loremlorem, semper bibendum lectus lobortis ac."
    //             },
    //             {
    //                 prodID: 12,
    //                 img: "../../assets/img/product-4.jpg",
    //                 name: "Apple new mac book 2015 March :P",
    //                 ins: 899.00,
    //                 del: 999.00,
    //                 qty: 1,
    //                  thumbs: {
    //                     thumb1:'assets/img/product-thumb-1.jpg',
    //                     thumb2:'assets/img/product-thumb-2.jpg',
    //                     thumb3:'assets/img/product-thumb-3.jpg'
    //                 },
    //                 Tags: ['awesome','best','sale','shoes'],
    //                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique,diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus exaliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissimporta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodalesnisl. Aliquam eget dolor eget elit malesuada aliquet. In varius loremlorem, semper bibendum lectus lobortis ac."
    //             }
    //         ];
    
    // }
   
    

}
}