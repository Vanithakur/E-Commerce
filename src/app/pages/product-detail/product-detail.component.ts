import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SelectedProductService } from 'src/app/services/product-detail/selectedproduct.service';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products: any=[];
isSelected:boolean = true;
isReview:boolean = false;
  constructor(private selectedproduct: SelectedProductService) { }

	ngOnInit(): void {
    this.products = this.selectedproduct.getSelectedProduct();
	}

    
  isTab() {
   this.isSelected= false;
   this.isReview = true;
  }

	
}
