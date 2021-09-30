var accounts=[
    [1000,"ram","savings",50000,true],
    [1001,"ravi","current",40000,true],
    [1002,"nikil","savings",5000,false],
    [1003,"jain","current",34000,false],
    [1004,"ajesh","savings",55000,true]
]

// sort the users wrt balance
var res = accounts.sort((acc1,acc2)=>acc1[3]-acc2[3]);
console.log(res);

// print details of acno=1004
var details = accounts.filter(acc=>acc[0]==1004);
console.log(details);

// is there any person with balance < 2000
var ac_name = accounts.some((acc1)=>acc1[3]<2000);
console.log(ac_name);

// print name of users with in_active account
var in_active = accounts.filter(acc=>acc[4]==false).map(acc=>acc[1]);
console.log(in_active);

// print details of user with max balance
var user_detail = accounts.reduce((acc1,acc2)=>acc1[3]>acc2[3]?acc1:acc2);
console.log(user_detail);


// print details of users with acc_type as savings anad balance > 25000
var users = accounts.filter((acc)=>acc[2]=='savings'&acc[3]>25000);
console.log(users);