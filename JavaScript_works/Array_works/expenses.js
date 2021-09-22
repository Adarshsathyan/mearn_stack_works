var expenses = [120000,13000,14000,15000,11000,25000,17000,10000]

//highest of the array
let highest = 0;
for(let amount of expenses){
    if(amount>highest){
        highest=amount
    }
}
console.log(`Highest is ${highest}`);

//lowest of array
lowest = highest;
for(let amount of expenses){
    if(amount<lowest){
        lowest=amount
    }
}
console.log(`Lowest is ${lowest}`);

//number of month exceeds 15k
let flag=0;
for(let amount of expenses){
    if(amount>15000){
        flag++
    }
}
console.log(`number of months excedds 15k ${flag}`);

//avergae expenses
let avg=0;
let sum = 0;
for(let amount of expenses){
    sum=sum+amount
}
avg = sum/expenses.length
console.log(`Average expense = ${avg}`);