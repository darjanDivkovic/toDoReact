import React from 'react'

import Clock from './Clock';

export default function Header() {
    return (
        <div className='header-container'>
            <h2 className='header'>todoapp.</h2>
            <Clock />
        </div>
    )
}
