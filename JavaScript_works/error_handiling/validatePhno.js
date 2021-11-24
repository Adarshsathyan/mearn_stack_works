
let phno = "9400794876";

try{
    if(phno.length<10){
        throw new Error("Invalid mobile")
    }else{
        console.log(phno);
    }
}catch(err){
    console.log(err);
}