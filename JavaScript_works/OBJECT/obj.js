var text = "hai hello hai hello";
var word_count ={};

//print word count
text.split(" ").map(word=>word in word_count?word_count[word]+=1:word_count[word]=1);
console.log(word_count);