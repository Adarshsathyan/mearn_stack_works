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

    //validate account number
    validateAccountNumber(accno){
        return accno in this.accounts?true:false
    }

    //authentication
    authenticate(accno,pass){
        if(this.validateAccountNumber){
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
    //payment histories
    paymentHistory(){
        let user = this.session["user"]
        return this.accounts[user].transactions
    }
    
    //allTransaction history
    getTransactions(){
        let transaction_history = [];
        for(let account in this.accounts){
            transaction_history.push(this.accounts[account].transactions)   
        }
        return transaction_history;
    }
    // creditTransactions(){
    //     let user = this.session["user"]
    //     let credit_details = []
    //     for(let transaction in this.accounts){
    //         let transactions = this.accounts[transaction].transactions
    //        transactions.map(history =>history.to==user?credit_details.push({from:transaction,amount:history.amount}):'')
    //     }
    //     return credit_details;
    // }
    
    creditTransactions(){
        let user = this.session["user"];
        let transactions = this.getTransactions();
        for (let transaction of transactions){
            for(let trans of transaction){
                if(trans.to==user){
                    console.log(trans);
                }
            }
        }
        
    }
}

let obj = new Bank;

let user = obj.authenticate(1002,"usertwo");
 console.log(user==1?"login success":user==0?"Incorrect password":"Invalid account number");

// obj.balanceEnquiry()
// obj.fundTransfer(1001,5000)
// console.log(obj.paymentHistory())
console.log(obj.getTransactions());
obj.creditTransactions()
// console.log(obj.creditTransactions())
