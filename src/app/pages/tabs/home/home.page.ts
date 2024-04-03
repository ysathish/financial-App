import { AfterContentChecked, Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';
import { Account } from '../_modals/Account';
import { HomeService } from '../../_services/home.service';
import { Features } from '../_modals/Features';
import { Transactions } from '../_modals/Transactions';
// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentChecked {

  accounts= {} as Account[] ;
  bannerConfig: SwiperOptions;
  featureConfig: SwiperOptions;
  features= {} as  Features[];
  transactions= {} as Transactions[];

  constructor(private service:HomeService) { }

  ngOnInit() {
    this.accounts=this.service.getAccounts();
    this.features=this.service.getfeatures();
    this.transactions=this.service.getTransactions();
   
  }

  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1,
      pagination: { clickable: true }
    };
    this.featureConfig = {
      slidesPerView: 3.5,
    };
  }

}
