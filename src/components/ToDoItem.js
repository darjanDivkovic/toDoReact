import React from 'react'

export default function ToDoItem(props) {
    return (
        <div className='todoItem-container'>
            <h2>{props.content}</h2>
            <button onClick={props.deleteTodo.bind(this, props.id)} className='xButton'>X</button>
        </div>
    )
}
