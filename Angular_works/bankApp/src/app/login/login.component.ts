import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  value = "Account number ... "

  loginForm = this.fb.group({
    uname:['',[Validators.required, Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })  

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

   

  login(){
    let acno = this.loginForm.value.uname;
    let pswd = this.loginForm.value.password;
    if(this.loginForm.valid){
      let result = this.ds.login(acno,pswd);
    
    if(result){
      alert("logged in succesfully!!!!")
      this.router.navigateByUrl('home');
    }else{
      this.router.navigateByUrl("");
    }
    }else{
      alert("invalid form")
    }
    
  }
}
