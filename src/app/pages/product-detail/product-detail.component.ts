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

	
}
