import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/services/products/products.service';


@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products: any=[];
isSelected:boolean = true;
isReview:boolean = false;
  constructor(private allproducts: ProductService) { }

	ngOnInit(): void {
    this.products = this.allproducts.getProducts();
	}

    
  isTab() {
   this.isSelected= false;
   this.isReview = true;
  }

	
}
