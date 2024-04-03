import { Component, OnInit, AfterContentChecked } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';
import { Cards } from '../_modals/Cards';
import { CardService } from '../../_services/card.service';
// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit, AfterContentChecked {

  bannerConfig: SwiperOptions;
  cards={} as Cards[];

  constructor(private service:CardService) { }

  ngOnInit() {
    this.cards=this.service.getCards();
  }

  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 40,
      pagination: { clickable: true }
    };
  }

}
