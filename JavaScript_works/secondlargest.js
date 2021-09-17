var num1 = 9;
var num2 = 10;
var num3 = 22;

if((num1>num2)&(num1>num3)){ 
    if(num2>num3){
        console.log(`${num2} is second largest`);
    }else{
        console.log(`${num3} is second largest`);
    }
}else if((num2>num1)&(num2>num3)){ 
    if(num3>num1){
        console.log(`${num3} is second largest`);
    }else{
        console.log(`${num1} is second largest`);
    }
}else if((num3>num1)&(num3>num2)){
    if(num1>num2){
        console.log(`${num1} is second largest`);
    }else{
        console.log(`${num2} is second largest`);
    }
}