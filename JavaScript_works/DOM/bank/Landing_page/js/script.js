class Bank{
    validateAccno(accno){
        return accno in localStorage?true:false;
    }
    getAccountDetails(acno){
        if(this.validateAccno(acno)){
            
            return JSON.parse(localStorage.getItem(acno));
        }else{
            return null;
        }
    }

    verifyLogin(){
        return sessionStorage.getItem("user")?true:false;
    }
    logout(){
       sessionStorage.removeItem("user");
    //    location.href="../Login/index.html"
       swal("Logged out");
       location.href=""
    }

    balanceEnquiry(){
        if(this.verifyLogin()){
            let acno = sessionStorage.getItem("user");
            let ac_details = JSON.parse(localStorage.getItem(acno));
            return  parseInt(ac_details.balance)
        }else{
            location.href="../login/index.html"
        }
        
    }
    checkBalance(){
        let balance = this.balanceEnquiry();
        balance_amnt.innerHTML = `₹ ${balance}`;
        document.querySelector('#land_page').style.display="none";
        document.querySelector('#balance').style.display="block";
    }
    fundTransfer(){
        if(this.verifyLogin()){
            let to_accno = to_acno.value;
            let c_accno = c_acno.value;
            let amount = amnt.value;
            if(to_accno==c_accno){
                if(this.validateAccno(c_accno)){
                    if(amount<this.balanceEnquiry() | amount==this.balanceEnquiry()){
                        let credit_user = this.getAccountDetails(c_accno);
                        let user_acno = sessionStorage.getItem("user");
                        let debit_user = JSON.parse(localStorage.getItem(user_acno));
                        let cur_bal = Number(credit_user.balance)
                        let bal = cur_bal+Number(amount)
                        credit_user.balance=bal;
                        localStorage.setItem(c_accno,JSON.stringify(credit_user));
                        debit_user.balance-=Number(amount);
                        localStorage.setItem(user_acno,JSON.stringify(debit_user));

                        swal("Transcation successfull","Money have been debited","success")
                        
                    }else{
                        swal("Transaction failed","insufficient balance","error")
                    }
                }else{
                    swal("Invalid acconut number"," ","error")
                }
            }else{
                swal("Mismatched acccount number", "check account number ","error")
            }
        }else{
            location.href="../Login/index.html"
        }
       
        
    }
}

let session = sessionStorage.getItem("user");
if(session){
    signin.style.display="none"
    balance1.style.display="block"
    fund_transfer.style.display="block"
}else{
    logout.style.display="none"
    balance1.style.display="none"
    fund_transfer.style.display="none"
}

let bank = new Bank();