import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            usernameInput : '',
            passwordInput : '',
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name] : e.target.value});
    }

    handleClick(){
        this.props.handleLogin(this.state.usernameInput, this.state.passwordInput);

        // Clear values
        this.setState({usernameInput : '', passwordInput : ''});
    }

    render() {
        return (
            <div className='login-container'>
            <div class='login-box'>
            <label>Username</label>
            <input type='text' name='usernameInput' value={this.state.usernameInput} onChange={this.handleChange}/>
            <label>Password</label>
            <input type='text' name='passwordInput' value={this.state.passwordInput} onChange={this.handleChange}/>
            <p>{this.props.serverMsg}</p>
            <button onClick={this.handleClick}>Login</button>
            </div>
            <div class='toggler-div'>
            <p>Don't have an Account ?</p>
            <button onClick={this.props.toggle}>Register</button>
            </div>
            </div>
        )
    }
}
