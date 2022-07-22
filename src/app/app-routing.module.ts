import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path:'products', component: ProductsComponent },
  {path:'product_details', component: ProductDetailComponent },
  {path:'cart',component: CartComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'login', component: LoginComponent},
  {
    
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],

    children: [
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
