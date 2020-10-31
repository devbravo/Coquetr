import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories';
import Login from './components/Login';
import Register from './components/Register';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <>
        <ToastContainer />
        <NavBar />
        <main>
          <Switch>
            <Route
              path='/categories/:category'
              component={Categories}
            />
            <Route path='/categories' component={Categories} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/home' component={Home} />
            <Redirect from='/' exact to='/' />
            <Redirect to='/not-found' />
          </Switch>
        </main>
      </>
    );
  }
}
