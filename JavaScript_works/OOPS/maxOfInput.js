function getMax(...args){
    return args.reduce((num1,num2)=>num1>num2?num1:num2)
}

console.log(getMax(10,5,60,70,20));