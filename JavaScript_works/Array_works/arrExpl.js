var expenses = [10000,20000,13000,14000] // defining an array

//print length of the array
console.log(expenses.length);

//printing all the values using loop
for(let i=0;i<expenses.length;i++){
    console.log(expenses[i]);
}
let total = 0;
for(let amount of expenses){
    total=total+amount
}
// console.log(total);

//print expense less <15000
for(let amount of expenses){
    if(amount<15000){
        console.log(amount);
    }
}