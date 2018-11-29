// array.js

var arr1=[];
var num1=[0,1,2,3,4,5,6,7,8,9];
var char1=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//print the a1b2...z26 pattern
//offset of from the beginning

// for (var m=0;m<=5;m+=1){
//   console.log(m);
// }

// var n =0;
// while(n <= 5){
//   console.log(n);
//   n=+1;
// }

// var o=6;
// do{
//   console.log(o);
//   o=+1
// }while(o<=5)

//working with arrays
var arr2=[];

for (var s=0; s< 10;s+=1){
  arr2.push(s);
}
console.log(arr2);

var arr3=[]
for (var s=97;s<123;s+=1){
  arr3.push(String.fromCharCode(s))
}
console.log(arr3)

var emptier = (array) => {
  while(array.length>0){
    array.pop();
    array.shift();
  }
}

var stacks=(function(){
  var array=[]
  function stacker(element){
    array.push(element);
  }

  function unStacker(){
    return array.pop();
  }

  function searcher(desiredExpression){
    while(desiredExpression!=array[array.length-1]){
      array.pop();
      if(array.length==0){
        console.log("item lost")
        result=null;
        break;
      }
    }
    result=array.pop();
    return 'found '+result;
  }

  return{
    in:stacker,
    out:unStacker,
    search:searcher
  }

})()

emptier(arr3);
console.log(arr3);

stacks.in('fred');
stacks.in('belotte');
stacks.in('fire');
stacks.in('Kowalski');
stacks.in('Howett');
stacks.in('Simmons');
console.log(stacks.out());
console.log(stacks.search('fire'));
// console.log(stacks.search('Howett'));
console.log(stacks.out());
console.log(stacks.out());

var arr5={
  0:'fred',
  1:'belotte'
}

var arr6=[];
arr6[100]=1;
console.log(arr6[9]);
console.log(arr6[100]);
console.log(arr6.length)

var arr7=[[],[[],1]];

var arr8=['fred',2018,false,null,undefined,Symbol, function(){}, {},[]];
console.log()

arr8.splice(4,6,[10,10]);
arr8[6]();

// // debugger
// for (var x=0; x<num1.length; x+=1){
//   console.log(num1[x]);
// }
// // debugger
// for (var i=0; char1[i]!='m'; i+=1){
//   console.log(char1[i]);
// }
// // debugger
// for (var unit=((char1.length)-1); char1[unit];unit-=1){
//   console.log(char1[unit]);
//   if (char1[unit]='m'){
//     break;
//   }
// }
// // debugger

//console.log(arr1.length)

// var rebounder = (numArray,charArray) => {
//   ;
// }

// function consonantCheck(selectedString){
//   //Checks if a single lower case string is a consonant. Returns 5 if consonant. Returns 4 if not.
//   var consonance=0
//   var vowelArray=['a','e','i','o','u']
//   for (var vowelIndex=0;vowelIndex<vowelArray.length;vowelIndex+=1){
//     if (selectedString!=vowelArray[vowelIndex]){
//       consonance+=1;
//     }
//   }
//   return consonance;
// }

// for(var index=0;index<char1.length;index+=1){
//   consonance=consonantCheck(char1[index]);
//   if (consonance==5){
//     console.log(char1[index])
//   }
// }

