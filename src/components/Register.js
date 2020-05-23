import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            usernameInput : '',
            passwordInput : '',
            retypePasswordInput : '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    handleRegisterClick(){
        this.props.handleRegister(this.state.usernameInput,
                                  this.state.passwordInput,
                                  this.state.retypePasswordInput);
        
        this.setState({usernameInput : '',passwordInput: '',retypePasswordInput: ''});                 
    }

    render() {
        return (
            <div className='register-container'>
                <div className='register-box'>
                    <label>Username</label>
                    <input type='text' name='usernameInput' onChange={this.handleChange} value={this.state.usernameInput} />
                    <label>Password</label>
                    <input type='password' name='passwordInput' onChange={this.handleChange} value={this.state.passwordInput} />
                    <label>Retype password</label>
                    <input type='password' name='retypePasswordInput' onChange={this.handleChange} value={this.state.retypePasswordInput} />
                    <button onClick={this.handleRegisterClick}>Register</button>
                </div>
                <div class='toggler-div'>
                <p>Already have an Account ?</p>
                <button onClick={this.props.toggle}>Login</button>
                </div>
            </div>
        )
    }
}
