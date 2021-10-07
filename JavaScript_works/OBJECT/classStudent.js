class Student {
    constructor(rol,course,stud_name){
        this.rol=rol; //this keyword is used to point the curent object.
        this.course=course;
        this.stud_name=stud_name;
    }
    printStudent(){
        console.log(this.rol,this.stud_name,this.course);
    }

}

//creating an object
//object1
var student1 = new Student(6,"BCA","Adarsh");
student1.printStudent();

//object2
var student2 = new Student(20,"ACA","Aswin");
student2.printStudent();