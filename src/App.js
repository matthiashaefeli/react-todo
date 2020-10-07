import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    this.setState({
      items: [...this.state.items, newItem],
      id: uuidv4(),
      item: '',
      editItem: false
    })
  }

  clearList = () => {
    this.setState({
      items: []
    })
  }

  handleDelete = (id) => {
    const itemsFiltered = this.state.items.filter((item) => item.id !== id)
    this.setState({
      items: itemsFiltered
    })
  }

  handleEdit = (id) => {
    const item = this.state.items.find((item) => item.id === id)
    const itemsFiltered = this.state.items.filter((item) => item.id !== id)
    this.setState({
      item: item.title,
      id: id,
      items: itemsFiltered,
      editItem: true
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    )
  }
}

