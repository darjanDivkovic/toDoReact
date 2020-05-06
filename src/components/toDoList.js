import React, { Component } from 'react'

export default class toDoList extends Component {
    render() {
        return (
            <div className='toDoListContainer'>
               <input type='text' placeholder='ADD TODO'/>
               <button>ADD TODO</button>
            </div>
        )
    }
}
