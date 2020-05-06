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
        }
    }
    render() {
        return (
            <div className='toDoListContainer'>
               <input type='text' placeholder='ADD TODO'/>
               <button>ADD TODO</button>
               <div class='todoitems-container'>
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
