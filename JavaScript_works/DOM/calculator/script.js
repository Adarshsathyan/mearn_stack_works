//display value on text box on button click
var  displayValue=(num)=>result.value+=num;

//clear the screen
var clearScreen = ()=>result.value='';


//evaluate the result
var evaluateExpr=()=>result.value=eval(result.value);

//backspace
var backSpace = ()=> result.value=Math.floor(result.value/10)
   
