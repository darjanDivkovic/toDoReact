import React, { Component } from "react";

import ToDoItem from "./ToDoItem";

export default class CompletedTodos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="completed-todoitems-wrapper">
      <div className="todoitems-container">
        <ul>
          {this.props.completedTodos.map((todo) => {
            return (
             
              <li className="todo-item-container">
                <div className="content-container-completeds">
                  <h2 className="content">{todo.content}</h2>
                  <h4 className="completed-at"><span>Completed at: </span>{todo.completedTime}</h4>
                </div>
                <div className="todo-item-buttons-container">
                  <button onClick={this.props.deleteCompletedTodo.bind(this, todo.id)} className="xButton">
                    delete
                  </button>
                </div>
              </li>
              
            );
          })}
        </ul>
      </div>
      </div>
    );
  }
}
