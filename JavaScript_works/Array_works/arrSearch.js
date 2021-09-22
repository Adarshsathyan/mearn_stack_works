var arr =[10,11,12,13,15,14,11]
var flag = 0;
for(let num of arr){
    if(num==15){
        flag++
        break;
    }else{
        flag=0
    }
}
if(flag==1){
    console.log(" Element found in array");

}else{
    console.log("Element is not in the array");
}