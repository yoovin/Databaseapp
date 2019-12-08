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
import Salary from './route/Salary';
import Task from './route/Task';

// Admin page
import Schedule from './admin/Schedule'
import Crew from './admin/Crew';
import cBoard from './admin/Board';
import Financial from './admin/Financial';
import Goods from './admin/Goods';
import Movie from './admin/Movie';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/app" component={Appshell}/>
          <Route exact path="/" component={Signin}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/app/salary" component={Salary}/>
          <Route exact path="/app/calendar" component={Calendar}/>
          <Route exact path="/app/board" component={Board}/>
          <Route exact path="/app/profile" component={Profile}/>
          <Route exact path="/app/task" component={Task}/>

          <Route exact path="/admin/schedule" component={Schedule}/>
          <Route exact path="/admin/crews" component={Crew}/>
          <Route exact path="/admin/board" component={cBoard}/>
          <Route exact path="/admin/financial" component={Financial}/>
          <Route exact path="/admin/goods" component={Goods}/>
          <Route exact path="/admin/movie" component={Movie}/>
        </div>
      </Router>
    )
  }
}
