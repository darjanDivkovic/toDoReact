import React, { Component } from "react";

import EditorToDo from "./EditorToDo";

export default class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editToggler: false,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({ editToggler: !this.state.editToggler });
  }

  completeTodo(completedID, content) {
    let date = new Date();

    console.log(completedID);
    // delete it from state here
    this.props.deleteTodo(completedID);

    let completedTodo = { id : completedID, content : content, completedTime : date.toLocaleTimeString()};

    // Add it to completed todos
    this.props.addToCompletedTodos(completedTodo);
  }

  render() {
    let edit;
    if (this.state.editToggler) {
      edit = <EditorToDo placeholder={this.props.content}
                         handleInput={this.props.handleInput}
                         toggleEdit={this.toggleEdit}
                         id={this.props.id} 
                         saveEdit={this.props.saveEdit}/>;
    }

    return (
      <li className="todo-item-container">
        <div className='content-container'>
        <button onClick={this.completeTodo.bind(this, this.props.id, this.props.content)}>
        ✔
        </button>
        <h2 className="content">{this.props.content}</h2>
        {edit}
        </div>
        <div className="todo-item-buttons-container">
          <button onClick={this.toggleEdit} className="edit">
            edit
          </button>
          <button
            onClick={this.props.deleteTodo.bind(this, this.props.id)}
            className="xButton"
          >
            delete
          </button>
        </div>
        </li>
    );
  }
}
