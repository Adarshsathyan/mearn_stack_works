class Bank{
    createAccount(p_name,acno,ac_type,min_bal){
        this.p_name = p_name;
        this.acno = acno;
        this.ac_type = ac_type;
        this.min_bal = min_bal;
    }
    deposit(amount){
        this.min_bal+=amount;
        console.log(`Your account number ${this.acno} has credited ${amount}. Total balance is ${this.min_bal}`);
    }
    withdrawl(amount){
        if(this.min_bal >amount ){
            this.min_bal-=amount;
            console.log(`Your account number ${this.acno} has debited ${amount}. Total balance is ${this.min_bal}`);
        }else{
            console.log("Transaction failed insufficient balance");
        }
    }
    checkBalance(acno){
        if(this.acno==acno){
            console.log(`Balance is ${this.min_bal}`);
        }else{
            console.log("Account number not exists");
        }
    }
}

//creating object
var transaction = new Bank();

transaction.createAccount("Thufile",1234,"Savings",20000);
transaction.deposit(1000);
transaction.checkBalance(1234);
console.log(transaction.p_name);
