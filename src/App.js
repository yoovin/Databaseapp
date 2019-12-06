import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom"


// Routes
import Calendar from './route/Calendar';
import Board from './route/Board';
import Profile from './route/Profile';
import Signin from './route/Signin';
import Signup from './route/Signup';
import Appshell from './route/Appshell';
import Sarary from './route/Sarary';
import Task from './route/Task';

// Admin page
import Dashboard from './admin/Dashboard'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/app" component={Appshell}/>
          <Route exact path="/" component={Signin}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/app/sarary" component={Sarary}/>
          <Route exact path="/app/calendar" component={Calendar}/>
          <Route exact path="/app/board" component={Board}/>
          <Route exact path="/app/profile" component={Profile}/>
          <Route exact path="/app/task" component={Task}/>
          <Route exact path="/admin" component={Dashboard}/>
        </div>
      </Router>
    )
  }
}
