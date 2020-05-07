import React, { Component } from 'react'

import nextID from 'react-id-generator';
import ToDoItem from './ToDoItem';


export default class toDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {id: nextID(), content: 'Eat'},
                {id: nextID(), content: 'Code'},
                {id: nextID(), content: 'Sleep'},
            ],

            currentInput : '',
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    }

    handleInput(e){
        this.setState({[e.target.name] : e.target.value})
    }

    handleAddTodo(){
        let newTodo = {id: nextID(), content: this.state.currentInput};
        let newTodos = Object.assign([], this.state.todos).concat(newTodo);
        
        this.setState({todos: newTodos });
        this.setState({currentInput : ''});
    }

    handleDeleteTodo(todoToDelete){
        console.log(todoToDelete);
        let newTodos = this.state.todos.filter((todo) => {
            if(todo.id === todoToDelete) return false;
            else return true;
        })
        this.setState({todos : newTodos})
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
                            return <ToDoItem key={todo.id} 
                                             id={todo.id}
                                             content={todo.content} 
                                             deleteTodo={this.handleDeleteTodo}/>
                            })
                        }
                    </ul>
               </div>
            </div>
        )
    }
}
