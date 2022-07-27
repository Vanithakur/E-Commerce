import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	qty!: number;

  ngOnInit(): void {
  }

  quantity(qty: any) {
    this.qty = qty;
  }


  inc(){
    // this.qty = +this.qty + 1;
    this.qty += 1;
  }

  dec(){
    this.qty = this.qty - 1;
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
