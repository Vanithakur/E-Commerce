import { Component, OnInit } from '@angular/core';
import { orders } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user_id:any;
  details:any;
  id:any;
  constructor(private orderService : orders) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('userData');
   const user_id = JSON.parse(this.user_id);
   const userId = user_id.id; 

    this.id = this.orderService.OrderId;
    this.orderService.ordersDetail(userId).subscribe(res => {
      console.log(res.data);
      this.details = res.data;
      
    })
    
  }

}
