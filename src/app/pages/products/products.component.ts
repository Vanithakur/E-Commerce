import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/services/products/products.service';



@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

<<<<<<< HEAD:src/app/products/products.component.ts
	allproduct: any = [];
	constructor(private allproducts: SliderService) { }

	ngOnInit(): void {
		this.allproduct = this.allproducts.getProducts();
		// console.log(this.allproduct);
=======

	ngOnInit(): void {
    this.allproduct = this.allproducts.getProducts();
    console.log(this.allproduct);
    
>>>>>>> 804f7feec332f070fd7d35c9278159a574ea82ee:src/app/pages/products/products.component.ts
	}
	
	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: false,
		dots: false,
		navSpeed: 300,
		navText: ['<i class="fa fa-angle-left" ></i>', '<i class="fa fa-angle-right" ></i>'],
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 2
			},
			760: {
				items: 3
			},
			1000: {
				items: 4
			},
			1200: {
				items: 5
			}



		},
		nav: true
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
			for (let i = 0; i < this.itemsCart.length; i++) {
				if (parseInt(id) === parseInt(this.itemsCart[i].prodID)) {
					this.itemsCart[i].qty = category.qty;
					index = i;
					break;
				}
				if (index == -1) {
					this.itemsCart.push(category);
					localStorage.setItem('localCart', JSON.stringify(category));
				} else {
					localStorage.setItem('localCart', JSON.stringify(category));
				}
			}

		}

	}
<<<<<<< HEAD:src/app/products/products.component.ts
=======

  allproduct:any =[];
  constructor(private allproducts: ProductService ) { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    navText: ['<i class="fa fa-angle-left" ></i>', '<i class="fa fa-angle-right" ></i>'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      },
      1200: {
        items:5
      }

    },
    nav: true
  }
>>>>>>> 804f7feec332f070fd7d35c9278159a574ea82ee:src/app/pages/products/products.component.ts
}
