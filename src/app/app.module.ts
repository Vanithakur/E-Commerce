import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderFirstComponent } from './header-main/header-first/header-first.component';
import { HeaderSecondComponent } from './header-main/header-second/header-second.component';
import { HeaderThirdComponent } from './header-main/header-third/header-third.component';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { FooterFirstComponent } from './footer-main/footer-first/footer-first.component';
import { FooterSecondComponent } from './footer-main/footer-second/footer-second.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { LatestProductComponent } from './home/latest-product/latest-product.component';
import { RecentlyProductComponent } from './home/recently-product/recently-product.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderRoutingModule } from './header-main/header-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './profile/orders/orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LoginComponent } from './login/login.component';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './login/loading-spinner/loading-spinner.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AuthGuard } from './guards/auth.guard';
import {RecentlyProductService} from './services/home-page/recently-product.service';
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
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    ProfileComponent,
    OrdersComponent,
    WishlistComponent,
    LoginComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderRoutingModule,
    NgbModule,
    NgxUsefulSwiperModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule

  ],
  providers: [AuthGuard,RecentlyProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
