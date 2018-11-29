//calculator.js

var omniCalc=(function (){
  function add(m,n){
  //  var sum=m+n;
  return (m+n);
  // //unreachable code
  // var absolutelyNothing=null
  // return (absolutelyNothing)

  }

  function sub(m,n){
    // var diff=m-n;
    return (m-n);
  }

  function mul(m,n){
  //  var product=m*n;
  return (m*n);
  }

  function div(m,n){
  if (n!=0){
    //  var quotient=m/n;
    return (m/n);
    }
  }
  return {
    adding:add,
    diving:div,
    subing:sub,
    muling:mul
  }
})();

var fredCalc=(function (){
  function add(m,n){
  //  var sum=m+n;
  return (m+n);
  // //unreachable code
  // var absolutelyNothing=null
  // return (absolutelyNothing)

  }

  function sub(m,n){
    // var diff=m-n;
    return (m-n);
  }

  function mul(m,n){
  //  var product=m*n;
  return (m*n);
  }

  function div(m,n){
  if (n!=0){
    //  var quotient=m/n;
    return (m/n);
    }
  }

  var result=0;

  return {
    result2: ()=>{
      return result;
    }

    ,
    add2: function(m,n){
      result=add(m,n);
      // debugger
      return this;
    },
    div2:function(n){
      result=div(result,n);
      //debugger
      return this;
    },
    sub2:function(n){
      result=sub(result,n);
      //debugger
      return this;
    },
    mul2:function(n){
      result=mul(result,n);
      //debugger
      return this;
    }
  }
})();

function Calculator(){
   var obj1=omniCalc;

   this.add=obj1.adding;
   this.sub=obj1.subing;
   this.mul=obj1.muling;
   this.div=obj1.diving;
}

var garyCalc=new Calculator();
var a=5;
var b=20;
 console.log(garyCalc.sub(garyCalc.div(garyCalc.mul(garyCalc.add(a,b),a),b),100))

 function fredFunction(m,n){
   var first=garyCalc.add(m,n);
   var second=garyCalc.mul(first,m);
   var third=garyCalc.div(second,n);
   return garyCalc.sub(third,100)
 }

 console.log(fredFunction(a,b))

//Nesteded - functional programming
console.log(omniCalc.subing(omniCalc.diving(omniCalc.muling(omniCalc.adding(a,b),a),b),100))

//Failed
// var result=omniCalc.adding(a,b).muling(a).diving(b).subing(100)
// console.log(result)

//chained - object oriented programming
console.log(fredCalc.add2(a,b).mul2(a).div2(b).sub2(100).result2());
