import React from 'react'

export default function EditorToDo(props) {

    function handleClick(){
        props.saveEdit(props.id);
        props.handleEdit();
    }

    return (
        <div className='editor-container'>
            <input type='text' 
                      placeholder={props.placeholder} 
                      className='edit-input'
                      onChange={props.handleInput}
                      name='editInput'
                      />
            <button className='save-button' onClick={handleClick.bind(this, props.id)}>SAVE</button>
        </div>
    )
}
