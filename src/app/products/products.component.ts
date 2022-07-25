import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	productArray = [
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
	]

	itemsCart: any = [];

	addCart(category: any) {
		console.log(category);
		let cartDataNull = localStorage.getItem('localCart');

		if (cartDataNull = null) {
			let storeDataGet: any = [];
			storeDataGet.push(category);
			localStorage.setItem('localCart', JSON.stringify(storeDataGet));
		} else {
			var id = category.prodID;
			let index: number = -1;
			this.itemsCart = JSON.parse(localStorage.getItem('localCart') || '{}');
			for(let i=0; i<this.itemsCart.length; i++){
				if(parseInt(id) === parseInt(this.itemsCart[i].prodID)){
					this.itemsCart[i].qty = category.qty;
					index = i;
					break;
				}
				if(index == -1){
					this.itemsCart.push(category);
					localStorage.setItem('localCart', JSON.stringify(category));
				} else {
					localStorage.setItem('localCart', JSON.stringify(category));
				}
			}

		} 

	}

}
