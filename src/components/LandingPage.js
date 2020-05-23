import React, { Component } from 'react'

import Login from './Login';
import Register from './Register';

export default class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggler : true,
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState({toggler : !this.state.toggler});
    }

    render() {
    let formToDisplay;
    if(this.state.toggler){
        formToDisplay = <Login handleLogin={this.props.handleLogin}
                               serverMsg={this.props.serverMsg}
                               toggle={this.toggle}/> 
    }
    else formToDisplay = <Register toggle={this.toggle}/>;

        return (
            <div className='landing-page-container'>
                <h1 className='lp-header'>todoapp.</h1>
                <div className='loading-page-inner-container'>
                    {formToDisplay}
                </div>
            </div>
        )
    }
}
