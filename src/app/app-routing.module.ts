import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PaymentComponent } from './pages/checkout/payment/payment.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DetailsComponent } from './pages/orders/details/details.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { MainImageComponent } from './pages/product-detail/selected-product/main-image/main-image.component';
import { ProductsComponent } from './pages/products/products.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [

{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ 
  path: 'cart',
  component: CartComponent,
  canActivate: [AuthGuard],
},
{ 
  path: 'checkout', 
  component: CheckoutComponent,
  canActivate: [AuthGuard],
},

{ path: 'payment',
 component: PaymentComponent ,
 canActivate: [AuthGuard],
},
{ path: 'orders',
 component: OrdersComponent ,
 canActivate: [AuthGuard],
},
{ path: 'view_details',
 component: DetailsComponent ,
 canActivate: [AuthGuard],
},
{path:'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path:'products', component: ProductsComponent },
  {path:'product_details/:id', component: ProductDetailComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
