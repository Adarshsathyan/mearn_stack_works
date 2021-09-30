var arr = [10,11,10,20,21,21];
var duplicates = {};

//find duplicates
for(let num of arr){
    if(num in duplicates){
        duplicates[num]+=1
    }
    else{
        duplicates[num]=1
    }
}

for(let num in duplicates){
    if(duplicates[num]>1){
        console.log(num);
    }
}
