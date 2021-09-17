var num1 = 9;
var num2 = 4;
var num3 = 2;

if((num1>num2)&(num1>num3)){
    console.log(`${num1} is largest`);
}else if((num2>num1)&(num2>num3)){
    console.log(`${num2} is larger`);
}else if((num3>num1)&(num3>num2)){
    console.log(`${num3} is larger`);
}else{
    console.log("all are same");
}