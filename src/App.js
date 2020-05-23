import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userVerified : false, 
      serverMsg : '',
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  renderRedirect(){
    return this.state.userVerified ? <Redirect to='/home' /> : null;
  }

  handleLogin(username, password){
    console.log(username, password);
    axios.post('http://localhost:8000/login', {username, password})
         .then(res => this.setState({userVerified : res.data.verified, serverMsg : res.data.msg}));
  }

  render() {
    return (
      <div className="App">
      <Router>
      <Route path='/home' exact>
      <HomePage />
      </Route>
      {this.renderRedirect()}
      <LandingPage path='/' exact
                   handleLogin={this.handleLogin}
                   serverMsg={this.state.serverMsg}/>
      </Router>
    </div>
    )
  }
}

