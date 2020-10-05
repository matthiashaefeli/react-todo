import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    return (
      <div>
        TodoList
        <TodoItem />
      </div>
    )
  }
}

export default TodoList;