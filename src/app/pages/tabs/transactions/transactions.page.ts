import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../_services/home.service';
import { Transactions } from '../_modals/Transactions';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  allTransactions={} as Transactions[];
  transactions={} as Transactions[]
  segmentValue = 'in';

  constructor(private service : HomeService) { }

  ngOnInit() {
    this.allTransactions=this.service.getTransactions();
    
    this.filterTransactions();
  }

  filterTransactions() {
    if(this.segmentValue == 'in') {
      this.transactions = this.allTransactions.filter(x => x.amount >= 0);
    } else {
      this.transactions = this.allTransactions.filter(x => x.amount < 0);
    }
  }

  segmentChanged(event:any) {
    console.log(event);
    this.segmentValue = event.detail.value;
    this.filterTransactions();
  }

}
