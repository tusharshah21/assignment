/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
      this.todos = [];
  }

  add(todo) {
      this.todos.push(todo);
  }

  remove(indexOfTodo) {
      if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
          this.todos.splice(indexOfTodo, 1);
      }
  }

  update(index, updatedTodo) {
      if (index >= 0 && index < this.todos.length) {
          this.todos[index] = updatedTodo;
      }
  }

  getAll() {
      return this.todos;
  }

  get(indexOfTodo) {
      if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
          return this.todos[indexOfTodo];
      }
      return null;
  }

  clear() {
      this.todos = [];
  }
}

// Example usage:
const todoList = new Todo();
todoList.add("Buy groceries");
todoList.add("Finish homework");
todoList.add("Call mom");

console.log(todoList.getAll()); // Output: ["Buy groceries", "Finish homework", "Call mom"]

todoList.remove(1);
console.log(todoList.getAll()); // Output: ["Buy groceries", "Call mom"]

todoList.update(0, "Buy fruits");
console.log(todoList.getAll()); // Output: ["Buy fruits", "Call mom"]

console.log(todoList.get(1)); // Output: "Call mom"

todoList.clear();
console.log(todoList.getAll()); // Output: []

module.exports = Todo;
