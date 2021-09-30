let num1=56, num2=98,gcd=0;;
for(let i=2;i<=num2;i++){
    if(num1%i==0&&num2%i==0){
        gcd = i;
    }
}
console.log(gcd);