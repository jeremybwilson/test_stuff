function makeSandwichWith(meat, bread){
  // var meat;// Get one slice of bread
  // var bread;
  // Add meat
  // Put slice of break on the top;
  return "My sandwich is " + meat + " on " + bread;
}
// console.log(makeSandwichWith('Ham', 'Wheat'));

// setTimeout(function() {
//   console.log('Wake up Gordon!');
// }, 5000)

var students = ['jeremy', 'alex', 'anika'];

function logName(name){
  console.log(name);
}
// logName(students[0]);
// logName(students[1]);
// logName(students[2]);

// for(var i = 0; i < students.length; i++){
//   logName(students[i]);
// }
// students.forEach(logName);
// students.forEach(function(name){
//   console.log(name);
// })

// function forEach(myArray, myFunction){
//   for(var i = 0; i < myArray.length; i++){
//     debugger;
//     myFunction(myArray[i]);
//   }
// }
// forEach(students, function(student){
//   console.log(student);
// })

function multiplyTwoNumbers(x, y){
  var result = x * y;
  return result;
}
// console.log(multiplyTwoNumbers(2,10));


function outerFunction(callback) {
  callback();
}

function logThis() {
  console.log(this);
}

/*
 * Case 1: The regular old default case.
 */
 
// outerFunction(logThis); // window

/*
 * Case 2: Call the callback as a method
 * (You'll probably NEVER see this, but I guess it's possible.)
 */
 
function callAsMethod(callback) {
  var weirdObject = {
    name: "Don't do this in real life"
  };
  
  weirdObject.callback = callback;
  weirdObject.callback();
}

callAsMethod(logThis); // `weirdObject` will get logged to the console

/*
 * Case 3: Calling the callback as a constructor. 
 * (You'll also probably never see this. But in case you do...)
 */
 
function callAsConstructor(callback) {
  new callback();
}

callAsConstructor(logThis); // the new object created by logThis will be logged to the console

/*
 * Case 4: Explicitly setting `this`.
 */
 
function callAndBindToGordon(callback) {
  var boundCallback = callback.bind({name: 'Gordon'});
  boundCallback();
}

callAndBindToGordon(logThis); // {name: 'Gordon'}

// In a twist, we give `callAndBindToGordon` a function that's already been bound.
var boundOnce = logThis.bind({name: 'The first time is forever'});
callAndBindToGordon(boundOnce); // {name: 'The first time is forever'}