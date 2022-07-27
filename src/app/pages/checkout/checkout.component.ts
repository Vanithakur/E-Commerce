import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
countries:any =[];
  constructor(private allcountry: CheckoutService) { }

  ngOnInit(): void {
    this.countries = this.allcountry.getCountries();
  }

}
