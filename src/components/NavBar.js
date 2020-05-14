import React from 'react'
import { Link } from 'react-router-dom';

import Colors from './Colors';

export default function NavBar(props) {

    
    let notification = null;
    if(props.uncheckedTodos !== 0) {
        notification = <div className='unchecked-notification-icon'>{props.uncheckedTodos}</div>
    }

    return (
        <div className='link-container'>
            <Link to='/' className='link'>Active todo</Link>
            <div className='completed-link-container'>
            <Link to='/completed' onClick={props.visitCompletedTodos} className='link'>Completed todo</Link>
            {notification}
            </div>
            <Link to='/' className='link'>Achivements</Link>
            <Link to='/' className='link'>About</Link>
            <Colors />
        </div>
    )
}
