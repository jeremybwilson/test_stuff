// Given two strings, find the number of common characters between them
let dog = {
  sound: 'woof',
  talk: function(){
    console.log(this.sound);
  }
}
// dog.talk();  // woof
// let talkFunction = dog.talk
// talkFunction(); // undefined

// let talkFunction = function(){
//   console.log(this.sound);
// }
// let boundFunction = 
//   talkFunction.bind(dog);
// boundFunction();
// console.log(this);
let button = document.getElementById('myNiceButton')

button.addEventListener(
  'click', 
  dog.talk.bind(dog)
)