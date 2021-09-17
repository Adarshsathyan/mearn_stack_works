function findPrime(low,upp){
    let res = '';
    for(let i=low;i<upp;i++){
        let flag =0;

        for(j=2;j<i;j++){
            if(i%j==0){
                flag++;
                break;
            }
        }
        if(flag==0){
            //console.log(i);
            res+=" "+i;
        }
    }
    return res;
    
}

console.log(findPrime(5,17));
//findPrime(5,17)
