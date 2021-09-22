let num =6;

for(let i=0;i<=num;i++){
    let star = "";
    for( let j=0;j<=num-i-1;j++){
        star+=" "
    }
    for( let k=0;k<i+1;k++){
        star+="* "
    }
    console.log(star);
}
