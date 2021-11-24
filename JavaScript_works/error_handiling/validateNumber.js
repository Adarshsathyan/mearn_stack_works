var accno ="123f4";

try{
    if(isNaN(accno)){
        throw new Error("Not a number")
    }else{
        console.log(accno);
    }
}catch(err){
    console.log(err);
}