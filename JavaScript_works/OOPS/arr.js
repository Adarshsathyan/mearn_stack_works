let transactions=[
    { to: 1002, amount: 500 },
    { to: 1003, amount: 600 },
    { to: 1004, amount: 700 }
]
let user = 1003;
for(let trans of transactions){
    if(trans.to ==user){
        console.log(trans);
    }
}