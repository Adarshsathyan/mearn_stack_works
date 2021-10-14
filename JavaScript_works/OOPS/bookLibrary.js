class Library{
    books = {
        "halfgirlfriend":{book_name:"halfgirlfriend",author:"chethan bhagath",price:300,avl_copies:300,copies_sold:100},
        "randamoozham":{book_name:"randamoozham",author:"mt",price:350,avl_copies:250,copies_sold:300},
        "alchemist":{book_name:"alchemist",author:"paulo",price:400,avl_copies:250,copies_sold:200}
    }

    //find book
    findBook(book_name){
        
        if(book_name in this.books){
            console.log(this.books[book_name]);
        }else{
            console.log("no book found!");
        }
    }
    //filterbook
    filterBooks(){
       let data =  [];
       for(let book in this.books){
           data.push(this.books[book])
       }
       data.sort((data1,data2)=>data2.copies_sold - data1.copies_sold)
       console.log(data);
       
    }
}

//obj
let library = new Library();
library.findBook("alchemist");
library.filterBooks()