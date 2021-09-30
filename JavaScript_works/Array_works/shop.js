var products = [
    [100,"oreo",40,50],
    [101,"fifty-fifity",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10]
]

// sort in desci order by stock wise

products.sort((item1,item2)=>item2[3]-item1[3])
console.log(products);

//des of prices
products.sort((item1,item2)=>item2[2]-item1[2]);
console.log("price : ",products);

// highest price
var costly_product = products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2);
console.log(costly_product);

//low cost product

var lowest_product = products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2);
console.log(lowest_product);

var search_item = products.find(item=>item[1]=='treat');
console.log(search_item);

//some
var is_available = products.some(item=>item[2]<10);
console.log(is_available);

//foreach
products.filter(item=>item[2]>30).forEach(item=>console.log(item))