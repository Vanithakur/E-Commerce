import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

isSelected:boolean = true;
isReview:boolean = false;
  constructor() { }

	ngOnInit(): void {
	}

    
  isTab() {
   this.isSelected= false;
   this.isReview = true;
  }

	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		dots: false,
		navSpeed: 300,
		navText: ['<i class="fa fa-angle-left" ></i>', '<i class="fa fa-angle-right" ></i>'],
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 3
			},
			760: {
				items: 3
			},
			1000: {
				items: 4
			},

			1200: {
				items: 5
			},
		},
		nav: true
	}

}
