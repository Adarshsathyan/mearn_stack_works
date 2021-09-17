var num = 5;

if(num%3==0){
    console.log("Fiz");
}
if(num%5 == 0){
    console.log("Buz");
}
if(num%15 == 0){
    console.log("Fizbuz");
}
else{
    console.log(`${num} is not divisible by 3, 5, 15`);
}