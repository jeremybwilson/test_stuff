const food = {
  init: function(type){
    this.type = type;
  },
  eat: function(){
    console.log('You ate the ' + this.type);
  }
}
const waffle = Object.create(food);
const carrot = Object.create(food);

// food.eat = function(){
//   console.log('YOU TOTALLY ATE THE ' + this.type.toUpperCase());
// }
waffle.init('waffle');
carrot.init('carrot');

// console.log('waffle is food -> ',
//   food.isPrototypeOf(waffle));
// console.log('int is food -> ',
//   food.isPrototypeOf(12345));
// console.log(
//   food.isPrototypeOf(carrot));

// Prototypes

function getSum(num1, num2){
  return num1 + num2;
}
// console.log("Number of arguments -> " + getSum.length);  // returns the length or number of arguments
// console.log("These two numbers added together equal -> " + getSum(5,7));  // returns the sum of the two passed values/arguments

function nameMammal(name){
  this.name = name;
  this.getInfo = function(){
    return "The mammals name is " + this.name;
  }
};

// console.log(nameMammal());

nameMammal.prototype.sound = "Rawwwrrr";

nameMammal.prototype.makeSound = function() {
  return this.name + " says " + this.sound;
};
const grover = new nameMammal("Grover");
// console.log(grover.makeSound());

// for(var prop in grover){
//   console.log(prop + " : " + grover[prop]);
// }
console.log("name Property of grover : " + grover.hasOwnProperty("name"));  // returns true because name is part of grover
console.log("sound Property of grover : " + grover.hasOwnProperty("sound"));  // returns false because sound is not part of grover

Array.prototype.inArray = function inArray(value){
  for(i = 0; i < this.length; i++){
    if(this[i] === value){
      return true;
    }
  }
  return false;
}
let sampArray = [1,2,3,4,5];
console.log("3 in array " + sampArray.inArray(3));
