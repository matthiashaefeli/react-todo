import React, { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoInput />
        <TodoList />
      </div>
    )
  }
}

