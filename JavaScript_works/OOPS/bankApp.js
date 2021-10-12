//bank
//authenticate
//fundTransfer
//balanceEnquiry

class Bank{
    session={}
    accounts = {
        1001: {
            acno: 1001, password: "userone", balance: 5000, transactions:
                [
                    { to: 1002, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1002: {
            acno: 1002, password: "usertwo", balance: 7000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1003: {
            acno: 1003, password: "userthree", balance: 8000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1002, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1004: {
            acno: 1001, password: "userone", balance: 9000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
    
    }
    
    //get all the details of accounts
    getAccountsDetails(){
        return this.accounts;
    }

    //authentication
    authenticate(accno,pass){
        if(accno in this.accounts){
            let password = this.accounts[accno].password
            
            if(password==pass){
                this.session["user"]=accno
                return 1;
            }else{
                return 0;
            }
            
        }else{
            //invalid account number
            return -1;
        }
    }

    balanceEnquiry(){
        if(this.session["user"]){
            let balance = this.accounts[this.session["user"]].balance
            console.log(balance);
        }else{
            console.log("Please login");
        }

    }

    fundTransfer(to_acc,amt){
        if(this.session["user"]){
            if(to_acc in this.accounts){
                let user = this.session["user"];
                let balance = this.accounts[user].balance;
                if(balance>amt){
                    this.accounts[user].balance-=amt;
                    this.accounts[to_acc].balance+=amt;
                    this.accounts[user].transactions.push({to:to_acc,amount:amt})
                    console.log(this.accounts[user]);
                }else{
                    console.log("insufficient balance");
                }
            }else{
                console.log("Incorrect account number");
            }
        }else{
            console.log("please login");
        }
        
    }
}

let obj = new Bank;

let user = obj.authenticate(1002,"usertwo");
 console.log(user==1?"login success":user==0?"Incorrect password":"Invalid account number");

obj.balanceEnquiry()
obj.fundTransfer(1001,5000)
