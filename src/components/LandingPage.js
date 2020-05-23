import React, { Component } from 'react'

import Login from './Login';

export default class LandingPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='landing-page-container'>
                <h1 className='lp-header'>todoapp.</h1>
                <div className='loading-page-inner-container'>
                    <Login handleLogin={this.props.handleLogin}
                           serverMsg={this.props.serverMsg}/>
                </div>
            </div>
        )
    }
}
