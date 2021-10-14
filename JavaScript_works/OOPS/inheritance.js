//single inheritance
class Parent {
    phone(){
        console.log("Ihave iphone 12"); 
    }                                   
}
class Child extends Parent {
    phone(){
        console.log("I have iphone 13");
    }
}
let child = new Child();
child.phone()