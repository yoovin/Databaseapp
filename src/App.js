import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom"


//Routes
import Calendar from './mater/Calendar';
import Board from './mater/Board';
import Profile from './mater/Profile';
import Signin from './mater/Signin';
import Signup from './mater/Signup';
import Appshell from './mater/Appshell';
import Sarary from './mater/Sarary';
import Task from './mater/Task';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Route exact path="/" component={Main}/> */}
          {/* <Route exact path="/sign" component={Sign}/> */}
          {/* <Route exact path="/find" component={Find}/> */}
          {/* <Route exact path="/crew" component={Crew}/> */}
          {/* <Route exact path="/sarary" component={Sarary}/> */}


          <Route path="/app" component={Appshell}/>
          <Route exact path="/" component={Signin}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/app/sarary" component={Sarary}/>
          <Route exact path="/app/calendar" component={Calendar}/>
          <Route exact path="/app/board" component={Board}/>
          <Route exact path="/app/profile" component={Profile}/>
          <Route exact path="/app/task" component={Task}/>
        </div>
      </Router>
    )
  }
}
