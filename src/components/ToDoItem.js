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
