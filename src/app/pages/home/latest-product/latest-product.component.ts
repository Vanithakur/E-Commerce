import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LatestProductService } from 'src/app/services/home-page/latest-product.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-latest-product',
  templateUrl: './latest-product.component.html',
  styleUrls: ['./latest-product.component.css']
})
export class LatestProductComponent implements OnInit {
latestProducts: any= [];
brands: any =[];
  constructor(
    private latestproduct: LatestProductService,
    private cart : CartService,
    private router : Router) { }

  ngOnInit(): void {
    this.latestproduct.getLatestProduct().subscribe(res=>{
      this.latestProducts = res.data;
      console.log(this.latestProducts);
      
    })
    this.latestproduct.getBrands().subscribe(res => {
      this.brands = res.data
      console.log(this.brands);
      
    })
    
    console.log(this.latestProducts);
  }
  addToCart(item:any){
		this.cart.addToCart(item);		  
    this.router.navigate(['/cart']);
		
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
