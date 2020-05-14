import React, { Component } from "react";
import nextID from "react-id-generator";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import Header from "./Header";
import ToDoList from "./toDoList";
import CompletedTodos from "./CompletedTodos";
import NavBar from "./NavBar";
import LevelBar from "./LevelBar";
import UserProfile from "./UserProfile";

export default class MainState extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          id: nextID(),
          content: "This is a long long long long long long long long todo",
        },
        { id: nextID(), content: "Code" },
        { id: nextID(), content: "Sleep" },
        { id: nextID(), content: "Eat" },
        { id: nextID(), content: "Repeat" },
        { id: nextID(), content: "Fuk" },
        { id: nextID(), content: "Drink" },
      ],
      completedTodos: [
        { id: nextID(), content: "Repeat", completedTime: "7:03:13 PM" },
        { id: nextID(), content: "Repeat", completedTime: "7:03:13 PM" },
      ],

      uncheckedTodos: 0,

      user: {
        username: "daarjantz",
        picture: '',
        currentLevel: 0,
        currentLevelProgress: 0,
        currentLevelGoal: 0,
      },
    };

    this.updateMainTodoState = this.updateMainTodoState.bind(this);
    this.addToCompletedTodos = this.addToCompletedTodos.bind(this);
    this.deleteCompletedTodo = this.deleteCompletedTodo.bind(this);
    this.visitCompletedTodos = this.visitCompletedTodos.bind(this);
  }

  updateMainTodoState(newState) {
    this.setState({ todos: newState });
  }

  addToCompletedTodos(completedTodo) {
    let newCompletedTodos = Object.assign([], this.state.completedTodos).concat(
      completedTodo
    );
    this.setState({ completedTodos: newCompletedTodos });

    // Increase notification by 1
    let increasedUncheckedTodo = this.state.uncheckedTodos + 1;
    this.setState({ uncheckedTodos: increasedUncheckedTodo });

    // Add ++ to level progres
    this.levelProgresUp();
    // Check if user should Level up
    setTimeout(() => {
      this.levelUP();
    }, 400);
  }

  levelProgresUp(callback) {
    let newCurrentLevelProgress = this.state.user.currentLevelProgress + 1;
    let newUser = Object.assign({}, this.state.user);

    newUser.currentLevelProgress = newCurrentLevelProgress;
    console.log(newUser);
    this.setState({ user: newUser });
  }

  levelUP() {
    let currentLevelProgress = this.state.user.currentLevelProgress;
    let currentLevelGoal = this.state.user.currentLevelGoal;
    if (currentLevelProgress === currentLevelGoal) {
      let newLevel = this.state.user.currentLevel + 1;
      let newUser = Object.assign({}, this.state.user);

      newUser.currentLevel = newLevel;
      newUser.currentLevelProgress = 0;
      newUser.currentLevelGoal = this.fibonacci(newUser.currentLevel);

      this.setState({ user: newUser });
    }
  }

  deleteCompletedTodo(completedTodoID) {
    const newState = this.state.completedTodos.filter((todo) => {
      return todo.id === completedTodoID ? false : true;
    });
    this.setState({ completedTodos: newState });
  }

  visitCompletedTodos() {
    this.setState({ uncheckedTodos: 0 });
  }

  fibonacci = (num) => {
    if (num <= 1) return 1;

    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  };

  componentDidMount() {
    // Calculating current level goal with fibonacci
    let currentLevelGoal = this.state.user.currentLevel;
    let newCurrentLevelGoal = this.fibonacci(currentLevelGoal);
    let newUser = Object.assign({}, this.state.user);
    newUser.currentLevelGoal = newCurrentLevelGoal;

    this.setState({ user: newUser });
  }

  render() {
    return (
      <Router>
        <div className="main-container">
          <Header />
          <NavBar
            uncheckedTodos={this.state.uncheckedTodos}
            visitCompletedTodos={this.visitCompletedTodos}
          />
          <Route path="/" exact>
            <ToDoList
              todos={this.state.todos}
              updateMainTodoState={this.updateMainTodoState}
              addToCompletedTodos={this.addToCompletedTodos}
            />
          </Route>
          <Route path="/completed" exact>
            <CompletedTodos
              completedTodos={this.state.completedTodos}
              deleteCompletedTodo={this.deleteCompletedTodo}
            />
          </Route>
          <LevelBar
            currentLevelGoal={this.state.user.currentLevelGoal}
            currentLevelProgress={this.state.user.currentLevelProgress}
            currentLevel={this.state.user.currentLevel}
          />
          <UserProfile />
        </div>
      </Router>
    );
  }
}
