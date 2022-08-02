import { Component, OnInit } from '@angular/core';
import { RecentlyProductService } from 'src/app/services/home-page/recently-product.service';
import { ProductService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-recently-product',
  templateUrl: './recently-product.component.html',
  styleUrls: ['./recently-product.component.css']
})
export class RecentlyProductComponent implements OnInit {
  products : any =[];
  constructor(
    private recentProduct : RecentlyProductService,
    private productsService : ProductService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(res => {
      console.log(res.data);
      this.products = res.data;
      
     })
  }

}
