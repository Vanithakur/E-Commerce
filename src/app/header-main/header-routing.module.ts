import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { LoginComponent } from '../login/login.component';
import { OrdersComponent } from '../profile/orders/orders.component';
import { ProfileComponent } from '../profile/profile.component';
import { WishlistComponent } from '../wishlist/wishlist.component';
const routes: Routes = [
{path:'profile', component: ProfileComponent},
{path:'orders', component: OrdersComponent},
{path:'wishlist', component: WishlistComponent},
{path:'mycart', component: CartComponent},
{path:'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule {

 }
