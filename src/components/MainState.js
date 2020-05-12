import React, { Component } from 'react';
import nextID from "react-id-generator";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

import Header from './Header';
import ToDoList from './toDoList';
import CompletedTodos from './CompletedTodos';
import NavBar from './NavBar';

export default class MainState extends Component {
    constructor(){
        super();
        this.state = {
            todos: [
                { id: nextID(), content: "This is a long long long long long long long long todo" },
                { id: nextID(), content: "Code" },
                { id: nextID(), content: "Sleep" },
            ],
            completedTodos: [
                { id: nextID(), content: "Repeat" },
            ]
        }
    }
    
    render() {
        return (
            <Router>
            <div className="main-container">
            <Header />
            <NavBar />
            <Route path='/' exact> 
                <ToDoList todos={this.state.todos}/>
            </Route>
            <Route path='/completed' exact>
                 <CompletedTodos completedTodos={this.state.completedTodos} />
            </Route>
            </div>
            </Router>
        )
    }
}
