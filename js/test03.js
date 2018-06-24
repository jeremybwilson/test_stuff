var todos = ['item 1', 'item 2', 'item 3'];

// console.log(todos);

// for(var i = 0; i < todos.length; i++){
//   console.log(todos[i]);
// }
// console.log(todos[0]);  // console log out the zero index array item

// todos.push('item 4');   // add item 4 to the array
// todos.push('item 5');   // add item 5 to the array

function displayTodos(){
  for(var i = 0; i < todos.length; i++){
    console.log(todos[i]);
  }
}
displayTodos();

function makeTurkeySandwich(filling){
  // add one slice of bread
  // add turkey
  // const turkey = '';
  // put slice of bread on top
  console.log('You added ' + filling + ' meat');
}
makeTurkeySandwich('turkey');

sayHiTo('jeremy') // person  = 'gordon'

function sayHiTo(person){
  console.log('hi', person);
}
