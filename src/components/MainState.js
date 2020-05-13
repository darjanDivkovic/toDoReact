import React, { Component } from 'react';
import nextID from "react-id-generator";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

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
                { id: nextID(), content: "Repeat", completedTime: "7:03:13 PM" },
                { id: nextID(), content: "Repeat", completedTime: "7:03:13 PM" },
            ],

            uncheckedTodos: 0,
        }

        this.updateMainTodoState = this.updateMainTodoState.bind(this);
        this.addToCompletedTodos = this.addToCompletedTodos.bind(this);
        this.deleteCompletedTodo = this.deleteCompletedTodo.bind(this);
        this.visitCompletedTodos = this.visitCompletedTodos.bind(this);
    }
    
    updateMainTodoState(newState){
        this.setState({todos : newState});
    }

    addToCompletedTodos(completedTodo){
        let newCompletedTodos = Object.assign([], this.state.completedTodos).concat(completedTodo);
        this.setState({completedTodos : newCompletedTodos});

        // Increase notification by 1
        let increasedUncheckedTodo = this.state.uncheckedTodos + 1;
        this.setState({uncheckedTodos : increasedUncheckedTodo});
    }

    deleteCompletedTodo(completedTodoID){
        console.log(completedTodoID);
        const newState = this.state.completedTodos.filter(todo => {
            return todo.id === completedTodoID ? false : true;
        })
        this.setState({completedTodos : newState});        
    }

    visitCompletedTodos(){
        this.setState({uncheckedTodos : 0});
    }

    render() {
        return (
            <Router>
            <div className="main-container">
            <Header />
            <NavBar uncheckedTodos={this.state.uncheckedTodos}
                    visitCompletedTodos={this.visitCompletedTodos}/>
            <Route path='/' exact> 
                <ToDoList todos={this.state.todos} 
                          updateMainTodoState={this.updateMainTodoState}
                          addToCompletedTodos={this.addToCompletedTodos}
                          />
            </Route>
            <Route path='/completed' exact>
                 <CompletedTodos completedTodos={this.state.completedTodos} 
                                 deleteCompletedTodo={this.deleteCompletedTodo}/>
            </Route>
            </div>
            </Router>
        )
    }
}
