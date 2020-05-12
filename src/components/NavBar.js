import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='link-container'>
            <Link to='/' className='link'>Active todo</Link>
            <Link to='/completed' className='link'>Completed todo</Link>
        </div>
    )
}
