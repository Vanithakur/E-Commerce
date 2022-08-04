import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { LoginComponent } from './pages/login/login.component';
import { LoadingSpinnerComponent } from './pages/login/loading-spinner/loading-spinner.component';
import { RecentlyProductComponent } from './pages/home/recently-product/recently-product.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { SearchComponent } from './common/sidebar/search/search.component';
import { RecentlyPostsComponent } from './common/sidebar/recently-posts/recently-posts.component';
import { SidebarProductsComponent } from './common/sidebar/sidebar-products/sidebar-products.component';
import { SelectedProductComponent } from './pages/product-detail/selected-product/selected-product.component';
import { RelatedProductComponent } from './pages/product-detail/related-product/related-product.component';
import { MainImageComponent } from './pages/product-detail/selected-product/main-image/main-image.component';
import { PaymentComponent } from './pages/checkout/payment/payment.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { OrdersComponent } from './pages/orders/orders.component';
import { DetailsComponent } from './pages/orders/details/details.component';


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
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    ProfileComponent,   
    WishlistComponent,
    LoginComponent,
    LoadingSpinnerComponent,
    ProductsComponent,
    RecentlyProductComponent,
    SidebarComponent,
    SearchComponent,
    RecentlyPostsComponent,
    SidebarProductsComponent,
    SelectedProductComponent,
    RelatedProductComponent,
    MainImageComponent,
    PaymentComponent,
    OrdersComponent,
    DetailsComponent,
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
    ReactiveFormsModule,

  ],

  providers: [ 
    {
    provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
