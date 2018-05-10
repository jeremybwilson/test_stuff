function makeSandwichWith(meat, bread){
  // var meat;// Get one slice of bread
  // var bread;
  // Add meat
  // Put slice of break on the top;
  return "My sandwich is " + meat + " on " + bread;
}
// console.log(makeSandwichWith('Ham', 'Wheat'));

var todoList = {
  todos: [],
  displayTodos: function() {
    // if todos.length is equal to zero
    if(this.todos.length === 0){
      console.log('Your todo list is empty!');
    } else {
      console.log('My Todos:');
      for(var i = 0; i < this.todos.length; i++){
        if(this.todos[i].completed === true){
          console.log('(' + this.todos[i].completed + ')', this.todos[i].todoText);
        } else {
          console.log('(' + this.todos[i].completed + ')', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) { // adds Todo text
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) { // updates Todo text property, not the entire object
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) { // deletes Todo text
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) { // toggles completed text
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completed todos
    for (var i = 0; i < totalTodos; i++){
      if(this.todos[i].completed === true){
        completedTodos++;
      }
    }
    // Case 1: if everything is true, make everything false
    if(completedTodos === totalTodos){
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }
    // Case 2: Otherwise, make everything true
    } else {
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = true;
      } 
    }
  }
};
