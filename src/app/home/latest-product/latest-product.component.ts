import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LatestProductService } from 'src/app/services/latest-product/latest-product.service';
@Component({
  selector: 'app-latest-product',
  templateUrl: './latest-product.component.html',
  styleUrls: ['./latest-product.component.css']
})
export class LatestProductComponent implements OnInit {
latestProducts: any= [];
brands: any =[];
  constructor(private latestproduct: LatestProductService) { }

  ngOnInit(): void {
    this.latestProducts = this.latestproduct.getLatestProduct();
    this.brands = this.latestproduct.getBrands();
    console.log(this.brands);
    
    console.log(this.latestProducts);
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
        items:5
      }
      
      

    },
    nav: true
  }

}
