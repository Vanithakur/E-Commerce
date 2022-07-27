import { Component, Input, OnInit } from '@angular/core';
import { SelectedProductService } from 'src/app/services/product-detail/selectedproduct.service';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {
  @Input() selectproduct: any;
products: any=[];
  constructor(private selectedproduct: SelectedProductService) { }

  ngOnInit(): void {
    this.products = this.selectedproduct.getSelectedProduct();
    console.log(this.products);
    

  }

}
