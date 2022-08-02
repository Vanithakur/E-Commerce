import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectedProductService } from 'src/app/services/product-detail/selectedproduct.service';
import { ProductService } from 'src/app/services/products/products.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {
  @Input() selectproduct: any;
  @Input() index: any;
  selectedproducts:any =[];
  detailData:any;
  // quantity='';
  reviewsData='';
  mainImage='';
  selectedImage = false;
products: any=[];
id:any='';
selectId ='';
productId ='';
quantity: any =[];
showreviews:boolean = false;
  constructor(
    private allproducts: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private cart:CartService) { }

  ngOnInit(): void {
    // let id = this.route.snapshot.params.id;
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    });
    this.allproducts.getProducts().subscribe(res => {
      this.products = res.data; 
    })
   
   
     this.reviewsData

  }
  addToCart(item:any){
		this.cart.addToCart(item);		  
    this.router.navigate(['/cart']);
		
	}

  changeMainImg(image:any){
    this.selectedImage = true;
    for(let product of this.products) {
      if(this.id == product.prodID){
      this.mainImage = image;
      this.quantity = product.qty;
      console.log(this.mainImage);
      
    }
  
}
  }
  reviews() {
    this.showreviews =true;
  }

}
