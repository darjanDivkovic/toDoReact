import React from 'react';
import './App.css';

import Header from './components/Header';
import ToDoList from './components/toDoList';

function App() {
  return (
    <div className="App">
      <div className="main-container">
      <Header />
      <ToDoList />
      </div>
    </div>
  );
}

export default App;
