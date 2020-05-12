import React, { Component } from "react";

import ToDoItem from "./ToDoItem";

export default class CompletedTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.completedTodos,
    };
  }

  render() {
    return (
      <div className="todoitems-container">
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <li className="todo-item-container">
                <div className="content-container">
                  <h2 className="content">{todo.content}</h2>
                  <h4><span>Completed at: </span>{todo.completedTime}</h4>
                </div>
                <div className="todo-item-buttons-container">
                  <button className="xButton" >
                    delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
