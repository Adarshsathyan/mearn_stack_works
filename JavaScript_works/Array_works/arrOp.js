var arr = [2,3,4,5,6,7,8] //op [1,2,3,7,8,9]
var newArr=[];
for(let num of arr){
    if(num<5){
        newArr.push(num-1)
    }else if(num>5){
        newArr.push(num+1)
    }else{
        newArr.push(num)
    }
}
console.log(newArr);

