import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SliderService } from './slider.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
images: any = [];
promos:any = [];

  constructor(private sliderService: SliderService) { }
  ngOnInit(): void {
   this.images = this.sliderService.getImages();   
   this.promos = this.sliderService.getPromo();
   console.log(this.promos);
  
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 300,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      },
      

    },
    nav: true
  }

  // dynamicSlides=[
  //   {
  //     image:'http://localhost:4200/assets/img/banner-ad/image_01.jpg',
  //     header1: 'What we learn from cooking together with children'
  //   },
  //   {
  //     image: 'http://localhost:4200/assets/img/banner-ad/image_02.jpg',
  //     header2:'Kidzania Back to school offer In Dubai'
  //   },
  //   {
  //     image: 'http://localhost:4200/assets/img/banner-ad/image_03.jpg',
  //     header3:'Dubai events in july: DSS D3 Restaurant'
  //   },
  //   {
  //     image: 'http://localhost:4200/assets/img/banner-ad/image_04.jpg',
  //     header4: 'Pumpkin cooking party with children'

  //   }
  // ]

}
