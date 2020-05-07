import React from 'react'

export default function ToDoItem(props) {
    return (
        <div className='todoItem-container'>
            <h2 className='content'>{props.content}</h2>
            <div className='todoItem-buttons-container'>
            <button className='edit'>EDIT</button>
            <button onClick={props.deleteTodo.bind(this, props.id)} className='xButton'>DELETE</button>
            </div>
        </div>
    )
}
