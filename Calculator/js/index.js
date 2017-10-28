var currEquation = "";
var answer = 0;
var currInput = "";
function addToEquation(myString){

  currEquation+= myString;
    document.getElementById("input").innerHTML = "Input: " + currEquation;
}
function deleteKey(){
  
 currEquation = currEquation.substring(0, currEquation.length-1);
  document.getElementById("input").innerHTML = "Input: " + currEquation;
  console.log(currEquation);
}
function clearEquation(){
  currEquation = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("input").innerHTML = "";
  ans = 0;
}
function evaluateEquation(){
  
  
  if((answer = eval(currEquation)) == null) answer = 0;
    
  
document.getElementById("input").innerHTML =  "Input: " + answer;
  document.getElementById("output").innerHTML = answer;
  currEquation = answer;
  
  
}