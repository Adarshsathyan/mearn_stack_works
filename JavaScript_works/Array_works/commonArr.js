var arr1 = [10,20,21,22], arr2 = [11,12,20,21]
for(let num1 of arr1){
    for(let num2 of arr2){
        if(num1==num2){
            console.log(`(${num1})`);
        }
    }
}