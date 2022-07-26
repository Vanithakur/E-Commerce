import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AuthGuard } from './guards/auth.guard';
import { HeaderMainComponent } from './common/header-main/header-main.component';
import { HeaderFirstComponent } from './common/header-main/header-first/header-first.component';
import { HeaderSecondComponent } from './common/header-main/header-second/header-second.component';
import { HeaderThirdComponent } from './common/header-main/header-third/header-third.component';
import { FooterMainComponent } from './common/footer-main/footer-main.component';
import { FooterFirstComponent } from './common/footer-main/footer-first/footer-first.component';
import { FooterSecondComponent } from './common/footer-main/footer-second/footer-second.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { LatestProductComponent } from './pages/home/latest-product/latest-product.component';
import { RecentlyProductComponent } from './pages/home/recently-product/recently-product.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrdersComponent } from './pages/profile/orders/orders.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { LoginComponent } from './pages/login/login.component';
import { LoadingSpinnerComponent } from './pages/login/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    HeaderFirstComponent,
    HeaderSecondComponent,
    HeaderThirdComponent,
    FooterMainComponent,
    FooterFirstComponent,
    FooterSecondComponent,
    HomeComponent,
    SliderComponent,
    LatestProductComponent,
    RecentlyProductComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    ProfileComponent,
    OrdersComponent,
    WishlistComponent,
    LoginComponent,
    LoadingSpinnerComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxUsefulSwiperModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
