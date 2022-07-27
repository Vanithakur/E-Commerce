import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any = [];
  allproducts:any =0;
// public allproducts !:number; 

  constructor(private cart:CartService){}


  ngOnInit(): void {
    this.cart.getProductData().subscribe(res => {
      this.products = res;
	  this.allproducts = this.cart.getTotalAmount();
    })
  }

  removeProduct(item:any){
	this.cart.removeCartData(item);
  }

  


  // public cartItemList: any = []
  // public productList = new BehaviorSubject<any>([]);

  
  // constructor() {}

  // getProducts(){
  //   return this.productList.asObservable();
  // }

  // setProduct(product : any){
  //   this.cartItemList.push(...product);
  //   this.productList.next;
  // }

  // addtoCart(product:any){
  //   this.cartItemList.push(product);
  //   this.productList.next(this.cartItemList);
  //   this.getTotalPrice();
  // }

  // getTotalPrice(){
  //   let grandTotal = 0;
  //   this.cartItemList.map((a:any) => {
  //     grandTotal += a.total;
  //   })
  // }

  // removeCartItem(product : any){
	// this.cartItemList.map((a:any,index:any) => {
	// 	if(product.id === a.id){
	// 		this.cartItemList.splice(index,1);
	// 	}
	// })
  // }

}
