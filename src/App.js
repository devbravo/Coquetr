import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import Cocktails from './components/Cocktails';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />

        <div>
          <Switch>
            <Route path='/Categories' component={Categories} />
            <Route path='/Login' component={Login} />
            <Route path='/Register' component={Register} />
            <Route path='/Home' component={Home} />
            <Redirect from='/' exact to='/' />
            <Redirect to='/not-found' />
          </Switch>
        </div>
      </>
    );
  }
}
