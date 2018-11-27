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

let fizzNumber=prompt("insert value for fizz");
let buzzNumber=prompt("insert value for buzz");
let finalFizzbuzz=prompt("How many fizzbuzz values do you want");

let testNumber=1;

function incrementer(counter,factor){
  if(counter%factor){
    counter++;
    return counter;
  }
}

(function (testNumber){
  if(fizzbuzzCount>=finalFizzbuzz){
    console.log('For '+finalFizzbuzz+' fizzbuzzes');
    console.log(fizzCount+' fizzes')
    console.log(buzzCount+' buzzes')
  }
  fizzCount=incrementer(fizzCount,)

})
