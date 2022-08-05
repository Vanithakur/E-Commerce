import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userIdData: any;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.userIdData = localStorage.getItem('userData');
    console.log(this.userIdData);

    const user_id = JSON.parse(this.userIdData)
    const userId = user_id.id;

    //to display on cart
    this.cart.getDisplayCartItems(userId).subscribe(res => {

      this.cart.totalItemsCount(res.data);
      this.cart.recalculateTotalAmount(res.data);
    })
  }

}
