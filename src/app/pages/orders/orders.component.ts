import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { orders } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  user_id:any;
  orders:any;
  constructor(
    private orderService : orders,
    private router : Router ) { }

  ngOnInit(): void {
   
   this.user_id = localStorage.getItem('userData');
   const user_id = JSON.parse(this.user_id);
   const id = user_id.id; 
   this.orderService.ordersDetail(id).subscribe(res => {
   this.orders = res.data;
    
   })
  }
onDetails(id: number){
  this.orderService.OrderId = id;
  this.router.navigate(["view_details"]);
}
}
