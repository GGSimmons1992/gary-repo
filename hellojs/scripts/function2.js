//function2.js
//Exploration of parameters and arguments
//Paramaters are the definitions of arguments that functions can receive
//parameters declare; arguments define
//Parameters define; arguments call

//Define with parameters
function printName(name){ //Signature of the function: name and the name of it's parameters
  console.log(name);
}

function printFullName(first,last){
  console.log(first +" "+ last); //String concatenation.
}

//calling with arguments
printName('Fred one');
printFullName('Fred one','Belotte');

console.log(printName('Fred two'));
console.log(printFullName('Fred two','Belotte'));
