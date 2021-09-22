var arr = [1,2,3,4]

var elemnt = 5;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==elemnt){
            console.log(`pairs (${arr[i]},${arr[j]})`);
        }
    }
}