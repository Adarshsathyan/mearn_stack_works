var pattern = "BACABB";
var r_patten = {};
//find recursive pattern
let arr = pattern.split("");
for(let letter of arr){
    if(letter in r_patten){
        console.log(letter, "is recursive");
        break;
    }
    else{
        r_patten[letter]=1
    }
}
