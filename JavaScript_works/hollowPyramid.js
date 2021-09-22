let limit = 8;
let star = "";
//externnal loop
for(let i=0;i<=limit;i++){ //1<=3 2<=3 3<=3 
    //printing spaces
    for(let j=1;j<=limit-i;j++){  //1<=2 2<=2; 1<=1 1<0
        star+=' ';         
    }
    //printing star
    for(let k=0;k<2*i-1;k++){ //0<1 0<3 0<5 1<5
        if(i===1||i===limit){ // 1===1||1==3 ; 2===1||2===3; 3===1||3===3 3===1||3===3
            star+="*"
        }else{
            if(k===0||k===2*i-2){ // 0===0||0===2
            star+="*"
                    
        }else{
            star+=" ";
                        
                        
        }
        } 
    }
    star+='\n'
}
console.log(star);

