import React from 'react'

export default function EditorToDo(props) {


    return (
        <div className='editor-container'>
            <input type='text' 
                      placeholder={props.placeholder} 
                      className='edit-input'
                      onChange={props.handleInput}
                      name='editInput'
                      />
            <button className='save-button' onClick={props.saveEdit.bind(this, props.id)}>SAVE</button>
        </div>
    )
}
