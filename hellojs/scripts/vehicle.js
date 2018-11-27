//vehicle.js
//Gary Garth Simmons
//Goal: Create a bike from the constructor of a car, knowing that both are vehicles.

function CarFactory(){
  this.color='black';
  this.wheels='4';
  this.seats='4';
  this.engine='gas';
}

var ford1=new CarFactory();
var bikeFactory=ford1.constructor;

var bike1= new bikeFactory();
var bike2= bikeFactory();

bike1.wheels=2;
bike1.seats=1;
bike1.engine='human';

console.log(bike1);
console.log(bike2);
