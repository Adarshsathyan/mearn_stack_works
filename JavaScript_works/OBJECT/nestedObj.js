var accounts={
    1001:{acno:1001,password:"userone",balance:5000},
    1002:{acno:1002,password:"usertwo",balance:7000},
    1003:{acno:1003,password:"userthree",balance:8000},
    1004:{acno:1001,password:"userone",balance:9000},
    
}

//login function
let login=(acno,password)=>{
    if(acno in accounts){
        let pass = accounts[acno].password
        if(password==pass){
            console.log("Login successful");
        }else{
            console.log("Invalid Password");
        }
    }else{
        console.log("Invalid account number");
    }
}

login(1002,"userone")