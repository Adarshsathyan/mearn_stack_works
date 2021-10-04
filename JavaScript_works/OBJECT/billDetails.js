var bill_details=[

    {bill_number:1000,date:"17-09-2021",amount:5000,payment_type:"card"},
    {bill_number:1001,date:"17-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1002,date:"17-09-2021",amount:6000,payment_type:"card"},
    {bill_number:1003,date:"17-09-2021",amount:2000,payment_type:"cash"},
    {bill_number:1004,date:"18-09-2021",amount:7000,payment_type:"cash"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"card"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"card"},
    {bill_number:1006,date:"18-09-2021",amount:3000,payment_type:"cash"},
    {bill_number:1007,date:"19-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1008,date:"19-09-2021",amount:6000,payment_type:"cash"},
]

//find the total sales in a date and make another object
var total_sales = {};
for(let bill of bill_details){
    let date = bill.date;
    let sale_amt = bill.amount;
    if(date in total_sales){
        total_sales[date]+=sale_amt;
    }else{
        total_sales[date]=sale_amt;
    }
}
console.log("Total sales : ",total_sales);

var total_card_sales = {};
for(let bill of bill_details){
    let date = bill.date;
    let sale_amt = bill.amount;
    let pay_type = bill.payment_type;
    if(date in total_card_sales ){
        if(pay_type=="card"){
            total_card_sales[date]+=sale_amt;
        }
    }else{
        if(pay_type=="card"){
            total_card_sales[date]=sale_amt;
        }
    }
}
console.log("Card total : ",total_card_sales);

//sort total_sales
// let total_sales_array = [];
// let sorted = {};
// for(let bill in total_sales){
//     total_sales_array.push([bill,total_sales[bill]])
// }
// total_sales_array.sort((bill1,bill2)=>bill2[1]-bill1[1]);

// for(detail of total_sales_array){
//     sorted[detail[0]]=detail[1];
// }
// console.log("Sorted : ", sorted);
let res = Object.entries(total_sales).sort((sale1,sale2)=>sale1[1]-sale2[1]);
console.log(res);