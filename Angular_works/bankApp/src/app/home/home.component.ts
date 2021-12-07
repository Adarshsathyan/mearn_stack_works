import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  depositForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  
  withdrawForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  user=this.ds.currentUser
 
  constructor(private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  deposit(){
    
    let acno=this.depositForm.value.acno;
    let pass=this.depositForm.value.password;
    let amnt=this.depositForm.value.amount;
    console.log(this.depositForm);
    
    if(this.depositForm.valid){
      let result = this.ds.deposit(acno,pass,amnt);

     if(result){
      alert(`${amnt} is added successfully. Balance id ${result}`)
     }else{
       alert("Something went wrong")
     }
    }else{
      alert("Invalid form")
    }
    
  }

  withdraw(){
    let acno = this.withdrawForm.value.acno;
    let pass = this.withdrawForm.value.password;
    let amnt = this.withdrawForm.value.amount;
    if(this.withdrawForm.valid){
      let result = this.ds.withdraw(acno, pass, amnt);
    
    if(result){
      alert(`${amnt} have debited. Balance id ${result}`)
    }else{
      alert("Something went wrong")
    }
    }else{
      alert("Invalid form")
    }
    
  }

}
