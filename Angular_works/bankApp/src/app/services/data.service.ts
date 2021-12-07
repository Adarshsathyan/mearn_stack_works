import { Injectable } from '@angular/core';

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

  constructor() {
    // this.getDetails()
   }

   getTransactions(acno:any){
     return this.data[acno].transactions
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

  register(accno:any,uname:any,pswd:any){
    let db = this.data;
    if(accno in db){
      return false;
    }else{
      db[accno]={
        accno,
        password:pswd,
        uname:uname,
        balance:0,
        transactions:[]
      }
      this.saveDetails()
      return true;
    }
  }

  login(acno:any,pswd:any){
    let db = this.data;
    if(acno in db){
      if(pswd==db[acno].password){
        this.currentUser=db[acno].uname;
        this.currentAcno=acno
        this.saveDetails()
        return true;
      }else{
        alert("login failed")
        return false;
      }
    }
    else{
      alert("User doesn't exist");
      return false;

    }
  }

  deposit(acno:any,pass:any,amnt:any){
    let db = this.data;
    let amount = parseInt(amnt);
    let date = new Date().toDateString();
    let time = new Date().toTimeString();
    if(acno in db){
      if(db[acno].password==pass){
        db[acno].balance+=amount
        db[acno]["transactions"].push({
          amount:amount,
          type:"Credit",
          date:date,
          time:time
        })
        this.saveDetails()
        return db[acno].balance
      }else{
        alert("Invalid password");
        return false;
      }
    }else{
      alert("user not found")
      return false;
    }
  }

  withdraw(acno:any,pass:any,amnt:any){
    let db = this.data;
    let date = new Date().toDateString()
    let temp_time = new Date()
    let hr = temp_time.getHours();
    let min = temp_time.getMinutes();
    let sec = temp_time.getSeconds();
    let am_or_pm=()=>{hr>12?"pm":"am"}
    console.log(am_or_pm);
    
    let time = `${hr}:${min}:${sec} ${am_or_pm}`
    let amount = parseInt(amnt)
    if(acno in db){
      if(db[acno].password==pass){
        if(amount<db[acno].balance){
          db[acno].balance-=amount
          db[acno]["transactions"].push({
            amount:amount,
            type:"Debit",
            date:date,
            time:time
          })
          this.saveDetails()
          return db[acno].balance
        }else{
          alert("Insufficent balance");
          return false;
        }
        
      }else{
        alert("Invalid password");
        return false;
      }
    }else{
      alert("user not found")
      return false;
    }
  }
}
