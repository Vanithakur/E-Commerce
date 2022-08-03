import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CartService } from '../cart/cart.service';
import { Observable } from 'rxjs';
import { Checkout } from 'src/app/models/checkout.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutform:any;
countries:any =[];
user_token:any;
totalAmount: any;
user_id: any;
  constructor(
    private checkoutService: CheckoutService,
    private router: Router,
    private cart: CartService) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('userData');

    this.countries = this.checkoutService.getCountries();
  
    this.checkoutform = new FormGroup({
      checkoutInfo : new  FormGroup({
        first_name: new FormControl(null, Validators.required),
        last_name: new FormControl(null, Validators.required),
        company: new FormControl(null, Validators.required),
        address1: new FormControl(null, Validators.required),
        address2: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        country: new FormControl(null, Validators.required),
        state: new FormControl(null, Validators.required),
        postcode: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, Validators.required,),
        optional: new FormControl(null, Validators.required,)

      })
    });
  
  //    this.totalAmount = this.cart.gettotal();
  //  console.log(this.totalAmount);  
    }
    onSubmit() {
      this.checkoutform;
       const details = this.checkoutform.value.checkoutInfo
      console.log(this.checkoutform.value.checkoutInfo.address1);
      const first_name = this.checkoutform.value.checkoutInfo.first_name
      const last_name = this.checkoutform.value.checkoutInfo.last_name
      const company = this.checkoutform.value.checkoutInfo.company
      const email = this.checkoutform.value.checkoutInfo.email
      const phone = this.checkoutform.value.checkoutInfo.phone
      const address1 = this.checkoutform.value.checkoutInfo.address1
      const address2 = this.checkoutform.value.checkoutInfo.address2
      const city = this.checkoutform.value.checkoutInfo.city
      const state = this.checkoutform.value.checkoutInfo.state
      const country = this.checkoutform.value.checkoutInfo.country
      const id1 = localStorage.getItem('userData');
        const user_id = JSON.parse(this.user_id);
        const id = user_id.id;        
        const token = user_id._token;
      
        

      let forms : Observable<Checkout>;
      let data= this.checkoutService.postDetails(details, id, token);      
        this.router.navigate(['/payment']);
      
    }
   

}
