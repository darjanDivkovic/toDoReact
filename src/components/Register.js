import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className='register-container'>
                <div className='register-box'>
                    <label>Username</label>
                    <input type='text'></input>
                    <label>Password</label>
                    <input type='text'></input>
                    <label>Retype password</label>
                    <input type='text'></input>
                    <button>Register</button>
                </div>
                <div class='toggler-div'>
                <p>Already have an Account ?</p>
                <button onClick={this.props.toggle}>Login</button>
                </div>
            </div>
        )
    }
}
