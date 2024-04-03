import { Injectable } from '@angular/core';
import { Cards } from '../tabs/_modals/Cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }
  cards:Cards[]= [
    { id: 1, company_img: 'assets/icon/mastercard.png', card_no: '5786 8945 9098 1100', card_holder: 'Sathish', exp_date: '08/24' },
    { id: 2, company_img: 'assets/icon/visa.png', card_no: '2006 7091 2014 8766', card_holder: 'Sathish', exp_date: '11/29' },
    { id: 3, company_img: 'assets/icon/mastercard.png', card_no: '4016 3081 2056 7890', card_holder: 'Sathish', exp_date: '06/25' }
  ];
  getCards(){
    return this.cards;
  }
}
