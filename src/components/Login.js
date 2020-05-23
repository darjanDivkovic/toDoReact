import React from 'react'

export default function Login() {
    return (
        <div className='login-container'>
            <label>Username</label>
            <input type='text' />
            <label>Password</label>
            <input type='text' />
            <button>Login</button>
        </div>
    )
}
