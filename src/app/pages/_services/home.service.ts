import { Injectable } from '@angular/core';
import { Account } from '../tabs/_modals/Account';
import { Features } from '../tabs/_modals/Features';
import { Transactions } from '../tabs/_modals/Transactions';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  accounts:Account[] = [
    { id: 1, acc_no: '57868945098', balance: '200000' },
    { id: 2, acc_no: '20067091201', balance: '50000' },
    { id: 3, acc_no: '40163081205', balance: '80000' }
  ];
  features:Features[] = [
    { id: 1, color: 'tertiary', icon: 'paper-plane', name: 'Send' },
    { id: 2, color: 'white', icon: 'send', name: 'Request' },
    { id: 3, color: 'success', icon: 'add-circle', name: 'Top-up' },
    { id: 4, color: 'light', icon: 'newspaper', name: 'Bills' },
    { id: 5, color: 'warning', icon: 'card', name: 'Cards' },
  ];
  transactions:Transactions[] = [
    { id: 1, to: 'Piyush Ag.', date: '2022-05-22', amount: 5000 },
    { id: 2, to: 'Avinash', date: '2022-03-02', amount: 7000 },
    { id: 3, to: 'Catherine', date: '2022-07-28', amount: -3250 },
    { id: 4, to: 'Akhil Ag.', date: '2022-01-09', amount: 1000 },
    { id: 5, to: 'Prem Ag.', date: '2022-04-13', amount: -800 },
  ];
  getAccounts(){
    return this.accounts;
  }
  getAccountsId(id:number):Account{
    let accounts=this.accounts.find(accounts=>accounts.id==id);
    if(accounts==undefined){
      throw new TypeError('there is no account on this id'+id);
    }
    return accounts;
  }
  getfeatures(){
    return this.features;
  }
  getfeaturesById(id:number):Features{
    let features=this.features.find(features=>features.id==id);
    if(features==undefined){
      throw new TypeError('there is no features on this id'+id);
    }
    return features;
  }
  getTransactions(){
    return this.transactions;
  }
  getTransactionsById(id:number):Transactions{
    let transactions=this.transactions.find(transactions=>transactions.id==id);
    if(transactions==undefined){
      throw new TypeError('there is no transactions on this id'+id);
    }
    return transactions;
  }
}
