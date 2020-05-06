import React from 'react'

export default function ToDoItem(props) {
    return (
        <div className='todoItem-container'>
            <h2>{props.content}</h2>
            <button onClick={props.delteTodo.bind(this, props.id)} class='xButton'>X</button>
        </div>
    )
}
