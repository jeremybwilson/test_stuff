function log_message(msg){
  console.log('Log: ' + msg);
}
// log_message('This is a test');

function html_tag(tag){
  function wrap_text(msg){
    console.log('<' + tag + '>' + msg + '</' + tag + '>');
  }
  return wrap_text;
}
// print_h1 = html_tag('h1');
// print_h1('Test Headline');
// print_h1('Another Headline!');

// print_p = html_tag('p');
// print_p('Test Paragraph!');

let str = "abcdedfg";
let array = [];
let newStr = '';
for(i = 0; i < array.length; i++){
  newStr += 'abc';
  array.push(str[i]);
  // console.log(str[i]);
}
// console.log(str);
// console.log(array);


var test = 'Global scope';  // variable of global scope

function localScope(){
  'use strict';
  var test = 'Local scope';  // creates a global scope variable with no variable declaration
  console.log(test);
}
// localScope();
// console.log(test);  // will not render console result if global variable undefined

let getAverage = function (x, y){
  let average = (x + y) / 2;
  return average;
}
console.log(getAverage(10,4));

let getDiameter = function(radius){
  let diameter = radius / 2;
  return diameter;
}
console.log(getDiameter(7));

// var name = "";
let greeting = function(name){
  console.log("Name is a " + typeof name + " type");
  console.log("Hi " + name);
  let number = 10;
  console.log("Number is a " + typeof number + " type");
}
greeting("Blake");

function fizz_buzz(){
  for(var index = 1; index < 101; index += 1) {
    if(index % 15 === 0){  // if divisible by 15 write out FizzBuzz
      console.log('FizzBuzz');
    } else if (index % 3 === 0) {  // if divisible by 3 write out Fizz
      console.log('Fizz');
    } else if (index % 5 === 0) {  // if divisible by 5 write out Buzz
      console.log('Buzz');
    } else {
      console.log(index);
    }
  }
}
// fizz_buzz();


var Car = function(){
  this.running = false;
};
Car.prototype.start = function(){
  this.running = true;
};

Car.prototype.stop = function(){
  this.running = false;
};
// var c = new Car();


var car = function(){
  this.running = false;
  this.start = function(){
    this.running = true;
  };
  this.stop = function(){
    this.running = false;
  };
}
var c = {};
car.apply(c);

var c = new Car();

c.start();
// console.log(c.running);

var array2 = [1,2,3];
var anotherArray2 = array2;

array2.push(4);
var array2 = ['a','b'];
console.log(array2);
console.log(anotherArray2);

