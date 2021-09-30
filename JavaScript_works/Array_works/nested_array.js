var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
//print number of empl
console.log(employees.length);



//print no of employees
let count =0;
for(let detail of employees){
    if(detail[3]=="developer"){
        count++
    }
}
console.log("Developer count",count);




//print experience of each employee
for(let employee of employees){
    console.log("exp",employee[5]-employee[4]);
}





//print highest_salaray
let highest = 0;
for (let employee of employees){
    if(employee[2]>highest){
        highest=employee[2]
    }
}
console.log("highest",highest);




//print lowest slaaaray
let lowest = 0;
for (let employee of employees){
    if(lowest==0){
        lowest=employee[2]
    }
    if(employee[2]<lowest){
        lowest=employee[2]
    }
}
console.log(lowest);




//print name of developer who is taking highest salary
let largest =0;
let e_name = "";
for(let employee of employees){
    if(employee[2]>largest && employee[3]=="developer"){
        largest=employee[2];
        e_name = employee[1]
    }
}
console.log("larger",largest,"Name",e_name);





//print name of highes experienced employee
let highExp = 0;
let h_name ="";
for(let employee of employees){
    if(employee[5]-employee[4]>highExp){
        highExp=employee[5]-employee[4]
        h_name=employee[1]
    }
}
console.log("Experience",highExp, "Name",h_name);





//print total sum of salaray group by developers
let total = 0;
for(let employee of employees){
    if(employee[3]=="developer"){
        total += employee[2]
    }
}
console.log(total);

//map to find name of all employees
let emp_names = employees.map((emp)=>emp[1]);
console.log(emp_names);
