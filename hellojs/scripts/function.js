//function.js

var varany='fred';
var varsome='fredBourneAgain';

//function expression
var f1=function(){
  var varf1='fred';
  var varany=100;
  varsome=1000;
  console.log(varany)
  console.log('f1 is called');
}
//function statement (function scope)
function f2 (){
  console.log('f2 is calling');
}


//function anonymous, function arrow. It does what a function does without being a true function (document scope)
var f3 = () => {
  console.log('f3 is magic');
}

//function iife (immediately invoked function expression)
(function () {
  console.log('f4 is skynet');
})()

f1();
f2();
f3();

console.log(varany);
console.log(varsome);


