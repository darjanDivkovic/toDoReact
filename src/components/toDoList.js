import React, { Component } from 'react'

import ToDoItem from './ToDoItem';

export default class toDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {id: 1, content: 'Eat'},
                {id: 2, content: 'Code'},
                {id: 3, content: 'Sleep'},
            ],

            currentInput : '',
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleInput(e){
        this.setState({[e.target.name] : e.target.value})
    }

    handleAddTodo(){
        let newTodo = {id: 4, content: this.state.currentInput};
        let newTodos = Object.assign([], this.state.todos).concat(newTodo);
        
        this.setState({todos: newTodos });
        this.setState({currentInput : ''});
    }

    render() {
        return (
            <div className='toDoListContainer'>
               <input type='text' onChange={this.handleInput} value={this.state.currentInput}placeholder='ADD TODO' name='currentInput'/>
               <button onClick={this.handleAddTodo} >ADD TODO</button>
               <div className='todoitems-container'>
                    <ul>
                        {
                            this.state.todos.map((todo)=> {
                            return <ToDoItem content={todo.content} />
                            })
                        }
                    </ul>
               </div>
            </div>
        )
    }
}
