import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

let options =  {
 headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:any={
    1000:{accno:1000,password:"123",uname:"Adarsh",balance:5000,transactions:[]},
    1001 :{accno:1001,password:"123",uname:"Sree",balance:5000,transactions:[]},
  }

   currentUser:any=""
   currentAcno:any=""

  constructor(private http:HttpClient) {
    
   }

  getTransactions(acno: any) {
    let body = {
       acno
     }
     return this.http.post('http://localhost:3000/transaction',body,this.getOptions())
   }

  saveDetails() {
    if(this.data){
      localStorage.setItem("data", JSON.stringify(this.data));
    }
    if(this.currentUser){
      localStorage.setItem("userData", this.currentUser)
    }
    if(this.currentAcno){
      localStorage.setItem("currentacno", this.currentAcno)
    }
  }

  getDetails() {
    if(localStorage.getItem("data")){ 
      this.data = JSON.parse(localStorage.getItem("data")||'')
    }
    if(localStorage.getItem("userData")){
      this.currentUser = localStorage.getItem("userData")||''
    }
    if(localStorage.getItem("currentacno")){
      this.currentAcno = localStorage.getItem("currentacno")||''
    }
  }

  getOptions() {
    let token = JSON.parse(localStorage.getItem("token")||'') 
    if (token) {
      let headers = new HttpHeaders();
    headers = headers.append('x-access-token', token)
      options.headers = headers;

    }
    
    return options;
    
  }

  register(accno: any, uname: any, pswd: any) {
    const body = {
      accno,
      uname,
      password:pswd
    }
    return this.http.post('http://localhost:3000/register',body)
   
  }

  login(accno:any,pswd:any){
    const body = {
      accno,
      pswd
    }
    
    return this.http.post('http://localhost:3000/login',body)
  }

  deposit(acno: any, pswd: any, amnt: any) {
    
    const body = {
      acno,
      pswd,
      amnt,
    }
   
    return this.http.post('http://localhost:3000/deposit',body,this.getOptions())
  }

  withdraw(acno:any,pswd:any,amnt:any){
    const body = {
      acno,
      pswd,
      amnt,
    }
   
    return this.http.post('http://localhost:3000/withdraw',body,this.getOptions())
  }

  deleteAccount(acno: any) {
    return this.http.delete('http://localhost:3000/deleteAcc/'+acno,this.getOptions())
  }
}
