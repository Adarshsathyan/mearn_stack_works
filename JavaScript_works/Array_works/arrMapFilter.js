var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

//sort ascnding based on experince
employees.sort((emp1,emp2)=>(emp1[5]-emp1[4])-(emp2[5]-emp2[4]))
console.log("sorted in ascndg : ",employees);

//sort descnd based on exp
employees.sort((emp1,emp2)=>((emp2[5]-emp2[4])-(emp1[5]-emp1[4])));
console.log("descending : ",employees);

//sort with slary
employees.sort((emp1,emp2)=>emp1[2]-emp2[2]);
console.log(employees);

//sort developers based on slary
let sorted_empl=employees.filter(emp=>emp[3]=='developer').sort((emp1,emp2)=>emp1[2]-emp2[2]);
console.log("sorted developers",sorted_empl);

//add bonus of 5000rs for all developers
 let sal = employees.filter(emp=>emp[3]=="developer").map(emp=>emp[2]+5000)
 console.log(sal);

//print all developer details
let details = employees.filter(emp=>emp[3]=='developer');
console.log(details);

//print names with ba of designation
let d_name = employees.filter(emp=>emp[3]=='ba').map(emp=>emp[1])
console.log(d_name);
//print names of developers
let developers_name = employees.filter(emp=>emp[3]=='developer').map(emp=>emp[1])
console.log(developers_name);

//print developers name whose exp > 6yer
let dev = employees.filter((emp)=>(emp[3]=='developer')&& emp[5]-emp[4]>6).map(emp=>emp[1])
console.log(dev);