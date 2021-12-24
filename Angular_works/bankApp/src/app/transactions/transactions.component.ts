import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  d_acno:any
  acno = ""
  date = new Date();
  transactions:any
  constructor(private ds:DataService,private router:Router) { 
    this.acno = JSON.parse(localStorage.getItem("acno") || "");
    this.ds.getTransactions(this.acno).subscribe((result:any) => {
      if (result) {
        this.transactions = result.transactions
      }
    },
      (result: any) => {
      alert(result.error.message)
    })
  }

  ngOnInit(): void {
  }

  deleteFromParent() {
    this.d_acno = JSON.parse(localStorage.getItem("acno") || "");

  }

  onDelete(event: any) {
    this.ds.deleteAccount(event).subscribe((result: any) => {
      if (result) {
        alert(result.message);
        this.router.navigateByUrl("")
      }
    },
      (result: any) => {
      alert(result.error.message);
    })
  }
  onCancel() {
    this.d_acno=""
  }
}
