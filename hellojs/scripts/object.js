// object.js

var obj1={}; //empty literal object
var humanoid={
  head:null,
  torso:null,
  arms:2,
  legs:2
}; //literal object (Can only be one version of this class)

// console.log(humanoid.arms)

obj1.fristName='fred';
obj1.lastName='belotte';

// console.log(obj1);//2

var humanoid2=humanoid

humanoid2.arms=4;

// console.log(humanoid.arms);//4
// console.log(humanoid2.arms);//4

var humanoid3=Object.create(humanoid); // constructor object

humanoid3.arms=6;

// console.log(humanoid.arms);//4
// console.log(humanoid2.arms);//4
// console.log(humanoid3.arms);//6
console.log(humanoid3.constuctor);//Copy
// console.log(humanoid3);

function HumanoidDNA(){ // constructor function
  this.head=null;
  this.torso=null;
  this.arms=2;
  this.legs=2;
}

var humanoid4= new HumanoidDNA();//New generated clone. Not a copy of a copy
var humanoid5= new HumanoidDNA();

console.log(humanoid4.sense8);
console.log(humanoid5.sense8);

//debugger;

HumanoidDNA.prototype.sense8="magic"; //Prototypes are not hoisted.

var terminator=humanoid4.constructor;// Using humanoid4's constructor
var terminator2=HumanoidDNA; //Going to the source
var terminoid=new terminator();
var terminoid2=new terminator2();

humanoid4.brain=1;
humanoid5.brain=2;

console.log(terminoid);
console.log(terminoid2);


