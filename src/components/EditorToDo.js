import React, { Component } from 'react'

export default class EditorToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : props.placeholder,
        }

        this.handleEditInput = this.handleEditInput.bind(this);
    }

    handleClick(){
        this.props.saveEdit(this.props.id, this.state.value);
        this.props.toggleEdit();
    }

    handleEditInput(e){
        this.setState({value : e.target.value});
    }
    

    render() {
        return (
            <div className='editor-container'>
             <input type='text' 
                    value={this.state.value} 
                    className='edit-input'
                    onChange={this.handleEditInput}
                    name='editInput'
                   />
             <button className='save-button' onClick={this.handleClick.bind(this, this.props.id, this.state.value)}>SAVE</button>
            </div>
        )
    }
}


