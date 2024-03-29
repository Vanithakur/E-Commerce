import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { SliderService } from 'src/app/services/home-page/slider.service';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
	images: any = [];
	promos: any = [];

	constructor(private sliderService: SliderService) { }
	ngOnInit(): void {
		// this.images = this.sliderService.getImages();
		// console.log(this.images);
		
		this.images = this.sliderService.getImages().subscribe(
			imagesData => {
				this.images = imagesData.data;
		
			});
		this.promos = this.sliderService.getPromo();
	}

	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		dots: true,
		navSpeed: 300,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
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


}
