var arr = [2,3,4,5,6,7];

let total =  arr.reduce((num1,num2)=>num1+num2)
console.log(total);
let max = arr.reduce((num1,num2)=>num1>num2?num1:num2);
console.log(max);
let min = arr.reduce((num1,num2)=>num1<num2?num1:num2);
console.log(min);