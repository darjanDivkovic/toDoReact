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
    return this.state.userVerified ? <Redirect to='/home' /> : <Redirect to='/' />;
  }

  handleLogin(username, password){
    console.log(username, password);
    axios.post('http://localhost:8000/login', {username, password})
         .then(res => this.setState({userVerified : res.data.verified, serverMsg : res.data.msg}));
  }

  handleRegister(username, password, retypedPassword){
    axios.post('http://localhost:8000/register',{username, password, retypedPassword})
         .then(res=> console.log(res));
  }

  render() {
    return (
      <div className="App">
      <Router>
      {this.renderRedirect()}
      <Route path='/home' exact>
      <HomePage />
      </Route>
      <Route path='/' exact>
      
      <LandingPage 
                   handleLogin={this.handleLogin}
                   handleRegister={this.handleRegister}
                   serverMsg={this.state.serverMsg}/>
      </Route>
      </Router>
    </div>
    )
  }
}

