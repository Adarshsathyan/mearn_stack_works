class Bank {

    validateAccount(accno) {
        return accno in localStorage ? true : false
    }

    authenticate() {
        let acno = accno.value;
        let pass = password.value;
        if (this.validateAccount(acno)) {
            let data = JSON.parse(localStorage.getItem(acno))
            if (data.password == pass) {
                sessionStorage.setItem("user", acno)
                location.href = "../Landing_page/index.html"

            } else {
                swal("Invalid password","Try again","error")
            }
        }
        else {
            swal("Invalid account number","Check account number","error")
        }
    }

    
}

var bank = new Bank;