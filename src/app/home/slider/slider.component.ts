import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SliderService } from './slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };  
images: any = [];
promos:any = [];
  constructor(private sliderService: SliderService) { }

  ngOnInit(): void {
   this.images = this.sliderService.getImages();   
   this.promos = this.sliderService.getPromo();
   console.log(this.promos);
   
   
  }

}
