import { Component, OnInit } from '@angular/core';
import { RecentlyProductService } from 'src/app/services/home-page/recently-product.service';

@Component({
  selector: 'app-recently-product',
  templateUrl: './recently-product.component.html',
  styleUrls: ['./recently-product.component.css']
})
export class RecentlyProductComponent implements OnInit {
products : any =[];
  constructor(private recentProduct : RecentlyProductService) { }

  ngOnInit(): void {
this.products = this.recentProduct.products;
  }

}
