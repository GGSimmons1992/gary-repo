// fizzbuzz.js
// Gary Garth Simmons
// Allows user to input values for fizz, buzz, and the maximum number of fizzbuzzes
// Criteria:
// 1)allow fizz to be any number
// 2)allow buzz to be any number
// 3)allow fizzbuzz to be any common multiple of fizz and buzz
// 4)count how many fizz, buzz, given a set number of fizzbuzz
// 5)let user input values for fizz, buzz, fizzbuzz(validate for (3))
// 6)let the user input number of fizzbuzz to count to

var fizzCount=0;
var buzzCount=0;
var fizzbuzzCount=0;

let testNumber=1;

function assigner(varriableName){
  let varriableValue=prompt("insert value for " + varriableName);
  return varriableValue;
}

function incrementer(number,counter,factor){
  if((number%factor)==0){
    counter+=1;
  }
  return counter;
}

function multipleCheck(proposedMultiple,factor){
  return (proposedMultiple%factor==0)
}

function fizzbuzzExercize(testNumber,finalFizzbuzz){
  if(fizzbuzzCount>=finalFizzbuzz){
    console.log('For '+finalFizzbuzz+' fizzbuzzes');
    console.log(fizzCount+' fizzes');
    console.log(buzzCount+' buzzes');
    return;
  }

  fizzCount=incrementer(testNumber,fizzCount,fizzNumber);
  buzzCount=incrementer(testNumber,buzzCount,buzzNumber);
  fizzbuzzCount=incrementer(testNumber,fizzbuzzCount,fizzbuzzNumber);

  testNumber+=1;
  // console.log(testNumber); //testcase
  fizzbuzzExercize(testNumber,finalFizzbuzz);
}

//Main execution

let fizzNumber=assigner("fizz")
let buzzNumber=assigner("buzz")
let fizzbuzzNumber=assigner("fizzbuzz")
if (multipleCheck(fizzbuzzNumber,fizzNumber) && multipleCheck(fizzbuzzNumber,buzzNumber)){
  let finalFizzbuzz=prompt("fizzbuzz number accepted. Please insert desired number of fizzbuzzes")
  fizzbuzzExercize(testNumber,finalFizzbuzz);
}else{
  console.log("Error: suggested fizzbuzz is not a multiple of both fizz and buzz. Please refresh page")
}



