import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { RelatedProductService } from 'src/app/services/product-detail/relatedproduct.service';

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.css']
})
export class RelatedProductComponent implements OnInit {
relatedproducts:[] =[];
  constructor(private relatedproduct: RelatedProductService) { }

  ngOnInit(): void {
	// this.relatedproducts = this.relatedproduct.getRelatedProduct();

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
