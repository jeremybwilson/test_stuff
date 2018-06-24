import _ from 'lodash';

// function component() {
//   var element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());

const todoList = {
  todos: [],
  displayTodos: function(){
    if(this.todos.length === 0){
      console.log('The todo list is empty!');
    } else { 
      console.log('My Todos:');
      for(var i = 0; i < this.todos.length; i++){
        console.log('My todos: ', this.todos[i].todoText); 
      }
    }
  },
  // It should have a function to add todos.
  addTodo: function (todoText){
    this.todos.push({
      todoText: todoText,
      completed: false  // Boolean true or false
    });
    this.displayTodos();
  },
  // It should have a function to change todos.
  changeTodo: function (position, todoText){ // needs parameters, position and new value
    // todos[0] = 'some new value';
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  // It should have a function to delete todos.
  deleteTodo: function (position){
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function (position){
    const todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
