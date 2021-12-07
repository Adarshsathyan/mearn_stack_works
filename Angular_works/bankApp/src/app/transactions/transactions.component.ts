import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  acno=""
  transactions:any
  constructor(private ds:DataService) { 
    this.acno=this.ds.currentAcno;
    this.transactions = this.ds.getTransactions(this.acno);
  }

  ngOnInit(): void {
  }

}
