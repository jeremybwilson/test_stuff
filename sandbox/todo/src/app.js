// import _ from 'lodash';

// let alertFn = require('./alert.js');
require('./app.css');
// let $ = require('jquery');

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
  addTodo: function (todoText){
    this.todos.push({
      todoText: todoText,
      completed: false  // Boolean true or false
    });
  },
  // It should have a function to change todos.
  changeTodo: function (position, todoText){ // needs parameters, position and new value
    // todos[0] = 'some new value';
    this.todos[position].todoText = todoText;
  },
  // It should have a function to delete todos.
  deleteTodo: function (position){
    this.todos.splice(position, 1);
  },
  toggleCompleted: function (position){
    const todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function(){
    const totalTodos = this.todos.length;
    let completedTodos = 0;

    // get the number of completed todos
    for(var i = 0; i < totalTodos; i++){
      if(this.todos[i].completed === true){
        completedTodos++;
      }
    }
    // if everything is true, make everything is false
    if(completedTodos === totalTodos){  // make everything false
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }
    } else {  // make everything true
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = true;
      }
    }
  }
};

const handlers = {
  addTodo: function(){
    let addTodoInputText = document.getElementById('addTodoInputText');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function(){
    let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    let changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position){
    let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();

  },
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  }
}

const view = {
  displayTodos: function() {
    const todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

    todoList.todos.forEach(function(todo, position) {
      let todoLi = document.createElement('li');
      let todoTextWithCompletion = '';

      if(todo.completed === true){
        todoTextWithCompletion = '(x) ' + todo.tododText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.tododText;
      }

      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this);
  },
  createDeleteButton: function(){
    let createDeleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListners: function() {
    const todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event){
      const elementClicked = event.target;
      console.log(event.target);
    });
  }
};

view.setUpEventListeners();