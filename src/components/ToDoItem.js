import React, { Component } from "react";

import EditorToDo from "./EditorToDo";

export default class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editToggler: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit() {
    this.setState({ editToggler: !this.state.editToggler });
  }

  render() {
    let edit;
    if (this.state.editToggler) {
      edit = <EditorToDo placeholder={this.props.content}
                         handleInput={this.props.handleInput}
                         handleEdit={this.handleEdit}
                         id={this.props.id} 
                         saveEdit={this.props.saveEdit}/>;
    }

    return (
      <li className="todoItem-container">
        <h2 className="content">{this.props.content}</h2>
        {edit}
        <div className="todoItem-buttons-container">
          <button onClick={this.handleEdit} className="edit">
            EDIT
          </button>
          <button
            onClick={this.props.deleteTodo.bind(this, this.props.id)}
            className="xButton"
          >
            DELETE
          </button>
        </div>
        </li>
    );
  }
}
