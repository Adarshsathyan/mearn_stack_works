//get elemt by tag name

// let h3ees = document.getElementsByTagName("h3");
// let list = document.getElementsByTagName("li");
// let h1 = document.getElementsByTagName("h1")
// for(let tag of h1){
//     tag.style.color = "purple"
// }

// for(let tag of h3ees){
//     tag.style.color = "red"
// }

// for(let tag of list){
//     tag.style.color = "green"
// }



//get elements by id
// let litem = document.getElementById("item");
// litem.style.color="magenta"




// //get element by class name
// var elements = document.getElementsByClassName("section")
// for(element of elements){
//     element.style.color = "red"
// }

// //innerhtml
document.getElementById("h1").innerHTML = "<em>Document Object Model</em>"

//above method returns html collection so it has to be converted to array using Array.from("<collectionname>") then use forEach.
 

//query Selector
//here it returns array so doesnt want to convert it into array.

// changing color by id 
var h1 = document.querySelector("#h1").style.color = "Blue"

//changing color by tag name
var litems = document.querySelectorAll("li")
for(let li of litems){
    li.style.color="orange"
}

//changing color by classname
var items = document.querySelectorAll(".section")
for(let item of items ){
    item.style.color = "brown"
}

//invalid age should be red and valid should be green