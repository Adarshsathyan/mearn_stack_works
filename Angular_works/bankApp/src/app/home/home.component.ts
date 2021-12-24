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

  user:any
  
  constructor(private ds: DataService, private fb: FormBuilder,private router:Router) { 
    this.user = localStorage.getItem("userData")||''
  }

  ngOnInit(): void {
    if (!localStorage.getItem("token")) {
      alert("Please Login");
      this.router.navigateByUrl("")
    }
  }

  deposit(){
    
    let acno=this.depositForm.value.acno;
    let pass=this.depositForm.value.password;
    let amnt=this.depositForm.value.amount;
    
    if(this.depositForm.valid){
      this.ds.deposit(acno, pass, amnt).subscribe((result:any) => {
        if(result){
          alert(result.message)
         }
      },
        (result: any) => {
        alert(result.error.message)
      })
     
    }else{
      alert("Invalid form")
    }
    
  }

  withdraw(){
    let acno = this.withdrawForm.value.acno;
    let pass = this.withdrawForm.value.password;
    let amnt = this.withdrawForm.value.amount;
    if(this.withdrawForm.valid){
      this.ds.withdraw(acno, pass, amnt).subscribe((result:any) => {
        if(result){
          alert(result.message)
         }
      },
        (result: any) => {
        alert(result.error.message)
      })
     
    }else{
      alert("Invalid form")
    }
    
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("acno");
    localStorage.removeItem("userData");
    this.router.navigateByUrl("")
  }

}
