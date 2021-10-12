//let test =  hhaaii hhooww haaii
//hai how hai

let pattern = "hhaaii hhooww haaii";
let words = pattern.split(" ");
let str = ""
for(let word of words){
        var st = new Set();
        for(let char of word){
            st.add(char)
        }
        st.add(" ")
        for(let word of st){
            str+=word
        }
        
}
console.log(str);