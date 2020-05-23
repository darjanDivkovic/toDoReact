import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Route path='/home' exact>
      <HomePage />
      </Route>
      <LandingPage path='/' exact/>
      </Router>
    </div>
  );
}

export default App;
