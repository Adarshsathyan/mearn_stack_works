class Employee{
    constructor(eid,e_name,salary,desig) {
        this.eid = eid;
        this.e_name = e_name;
        this.salary = salary;
        this.desig = desig
    }
    getEmployees(){
        return this.e_name
    }
}

var employee1 = new Employee(1000,"ram",25000,"developer");
var employee2 = new Employee(1001,"ravi",23000,"developer");
var employee3 = new Employee(1002,"raju",26000,"ba");

//print all employees
let employees = [];
employees.push(employee1,employee2,employee3)
console.log("All employees are : ",employees);

//print developer details
employees.filter(emp=>emp.desig=="developer").forEach(emp=>console.log("Employeees whose are developers",emp));

//sort employee details based on salary
let sorted_employees = employees.sort((emp1,emp2)=>emp1.salary-emp2.salary);
console.log("Sorted",sorted_employees);


//getMaxSalary
let max_salaray_employee = employees.reduce((emp1,emp2)=>emp1.salary>emp2.salary?emp1:emp2);
console.log("Employee with max salary",max_salaray_employee);