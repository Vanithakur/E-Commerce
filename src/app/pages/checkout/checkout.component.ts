import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutform:any;
countries:any =[];

totalAmount: any;

  constructor(
    private allcountry: CheckoutService,
    private router: Router,
    private cart: CartService) { }


    

  ngOnInit(): void {
   this.totalAmount = this.cart.gettotal();
   console.log(this.totalAmount);  

    this.countries = this.allcountry.getCountries();
    this.checkoutform = new FormGroup({
      checkoutInfo : new  FormGroup({
        first_name: new FormControl(null, Validators.required),
        last_name: new FormControl(null, Validators.required),
        address: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        country: new FormControl(null, Validators.required),
        postcode: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, Validators.required,)
      })
    });
  
   
    }
    onSubmit() {
      this.checkoutform;
      console.log(this.checkoutform.value);
      this.router.navigate(['/payment']);
      
    }
   

}
