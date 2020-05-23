import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userVerified : false, 
    }
  }

  renderRedirect(){
    return !this.state.userVerified ? <Redirect to='/' /> : null;
  }

  handleLogin(username, password){
    console.log(username, password);
  }

  render() {
    return (
      <div className="App">
      <Router>
      <Route path='/home' exact>
      {this.renderRedirect()}
      <HomePage />
      </Route>
      <LandingPage path='/' exact
                   handleLogin={this.handleLogin}/>
      </Router>
    </div>
    )
  }
}

