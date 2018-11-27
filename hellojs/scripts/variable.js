// variable.js

var1=1;//do not do this. (Multi-Document scope aka omni)
var var2= 2; //In scope of where it is created (can change)
let var3= 3; //It's own scope (block scope) (can change) (newer ES2015)
const var4=4; //It's own scope (block scope) (Doesn't change)

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);

var1='html';
var2='css';
var3='js';
// var4='fred'; //error here as it a constant.

console.log(var5);
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);


var var5=1000;
