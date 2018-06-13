import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/home/home'
import Login from './components/login/login'
import Registration from './components/registration/registration'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
              <nav className="navbar navbar-light">
                  <ul className="nav navbar-nav">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/registration">Registration</Link></li>
                  </ul>
              </nav>

              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/registration" component={Registration}/>
              </Switch>

          </div>
      </div>
    );
  }
}

export default App;
