import React, { Component } from "react";

export default class ToDoItem extends Component {
  constructor(props){
      super(props);
      this.state = {
          editToggler : true,
      }
      this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit(){
      this.setState({editToggler: !this.state.editToggler});
  }

  render() {
    let edit = null;
    if(this.state.editToggler) {
        edit = <input type='text' placeholder={this.props.content} className='edit-input'/>
    }

    return (
      <div className="todoItem-container">
        <h2 className="content">{this.props.content}</h2>
        { edit }
        <div className="todoItem-buttons-container">
          <button onClick={this.handleEdit} className="edit">EDIT</button>
          <button
            onClick={this.props.deleteTodo.bind(this, this.props.id)}
            className="xButton">
            DELETE
          </button>
        </div>
      </div>
    );
  }
}
