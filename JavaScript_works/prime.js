var num = 7;
var flag = 0;

for(var i=2; i<num;i++){
    if(num%i==0){
        flag=1;
        break;
    }
}
if(flag==0){
    console.log("not prime");
}else{
    console.log("prime");
}