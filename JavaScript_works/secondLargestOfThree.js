function secondLargestOfThree(num1,num2,num3){
    if(num1>num2&&num1>num3){
        if(num2>num3){
            return num2;
        }else{
            return num3;
        }
    }else if(num2>num3&&num2>num1){
        if(num1>num3){
            return num1;
        }else{
            return num3;
        }
    }
    else if(num3>num2&&num3>num1){
        if(num2>num1){
            return num2;
        }else{
            return num1;
        }
    }
}

console.log(secondLargestOfThree(5,2,8));