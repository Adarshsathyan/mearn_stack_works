function sum(...args){
    let res = args.reduce((num1,num2)=>num1+num2)
    return res;
}
console.log(sum(10,10,10));