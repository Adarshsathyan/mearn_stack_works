class Bank{
    logout(){
       sessionStorage.removeItem("user");
    //    location.href="../Login/index.html"
       alert("Logged out");
       location.href=""
    }
}

let session = sessionStorage.getItem("user");
if(session){
    signin.style.display="none"
}else{
    logout.style.display="none"
}

let bank = new Bank();