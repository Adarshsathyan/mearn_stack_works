//map
//filter
//reduce
//some
//foreach
//sort
//find

var arr =[2,3,4,5,6]

//map

//squares of each number
 var products = [
     [100,"oreo",40,50],
     [101,"fifty-fifity",20,60],
     [102,"borbourne",40,0],
     [103,"treat",30,10],
     [104,"arrowroot",30,0],
     [105,"moms-magic",45,10]
 ]

 //print number of items in shop
 let no_items = products.length
 console.log(no_items);
 //print number of available items
let count = 0;
products.map((item)=>item[3]>0?count++:'')
console.log(count);
 //print all product name only
 let i_name = products.map((item)=>item[1])
 console.log(i_name);

 //print all available product
 let pro = products.filter(item=>item[3]>0);
 console.log(pro);

 //print out of stock product name

 let stock = products.filter(item=>item[3]==0).map(item=>item[1]);
 console.log(stock);

 //add offer of 5rs for all products whose stock >50

 let offer = products.filter(item=>item[3]>50).map(item=>[item[2]-5,item[1]]);
 console.log("offer",offer);

 //print even numbers from arr

 let even = arr.filter(num=>num%2==0)
 console.log(even);

 //print all numbers > 3
 let numbers = arr.filter(num=>num>3)
 console.log(numbers);



 //array string
 var names = ["ajay","arun","akash","revin","bijoy"]
 
 //print all names starts with a

 let s_name = names.filter(name=>name[0]=='a');
 console.log(s_name);

 //squares of all even numbers
 let squares = arr.filter(num=>num%2==0).map(num=>num**2)
 console.log(squares);