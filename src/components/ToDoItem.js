import React from 'react'

export default function ToDoItem(props) {
    return (
        <div className='todoItem'>
            <h2>{props.content}</h2>
        </div>
    )
}
