import React from 'react'

export default function Login() {
    return (
        <div className='login-container'>
            <div class='login-box'>
            <label>Username</label>
            <input type='text' />
            <label>Password</label>
            <input type='text' />
            <button>Login</button>
            </div>
        </div>
    )
}
