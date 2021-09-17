var num=4;

for(let i=1;i<=num;i++){ //1<=4 2<=4 3<=4
    let str = '';
    for(let j=1;j<=i;j++){ //1<=1 2<=1 1<=2 2<=2 3<=2 1<=3
        str+=j
    }
    console.log(str);//1 1 2 1
}