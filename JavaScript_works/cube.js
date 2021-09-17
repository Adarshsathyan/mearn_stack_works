var num = 123456;
var out = 0;
while(num%10!=0){ //123%10 = 3
    out = out+(num%10)**3; //3**
    num = Math.trunc(num/10); //12

}
console.log(out);
