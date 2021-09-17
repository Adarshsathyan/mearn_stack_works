var num = 123;
var out = 0;

while(num%10!=0){ //123%10 = 3 12%10= 2 1%10 = 1 0%10
   let digit= num%10; //321
    out = out*10+digit 
    num=Math.trunc(num/10); //12 1 0
}
console.log(out);