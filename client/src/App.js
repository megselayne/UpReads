import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import StateController from './components/StateController';
import Nav from './components/Nav';
import Splash from './components/Splash';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: false,
      user: null,
      message: null,
    }
  }
  
  componentDidMount = () => {
    fetch('/api/v1/auth/login', { credentials: 'include' })
      .then(res => res.json())
      .then(res => {
        this.setState({
          auth: res.auth,
          user: res.data.user,
          message: null,
        })
      }).catch(err => console.log(err))
  }
  
  
  handleFormSubmit = (method, e, data, route) => {
    e.preventDefault()
    fetch(route, { 
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    }).then(res => res.json())
    .then(res => {
      this.setState({
        message: res.message,
        auth: res.auth,
        user: res.data.user,
      })
      if (res.message) {
        setTimeout(function() {
          this.setState({message: null})
        }.bind(this), 5000)
      }
      
    }).catch(err => {
      console.log(err)
    })
  }

  logout = () => {
    fetch('/api/v1/auth/logout', {
      credentials: 'include',
    }).then(res => res.json())
    .then(res => {
      this.setState({
        auth: res.auth,
        user: res.data.user
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className='container'>
        <Nav auth={this.state.auth} logout={this.logout}/>
          <Route exact path='/' render={() => (<StateController currentPage='home' />)} />
          <Route exact path='/search' render={() => (<StateController currentPage='search' userState={this.state} />)} />
          <Route exact path='/shelf/:id' render={props => (<StateController currentPage='shelf' currentId={props.match.params.id} userState={this.state} />)} />
          <Route exact path='/books/:id' render={props => (<StateController currentPage='show' currentId={props.match.params.id} userState={this.state} />)} />
          <Route exact path='/user/profile' render={() => (
            this.state.auth
            ? <StateController currentPage='profile' userState={this.state} />
            : <Redirect to='/auth/login' />
            )} />
          <Route exact path='/auth/login' render={() => (
          this.state.auth
              ? <Redirect to='/user/profile' />
              : <Login handleFormSubmit={this.handleFormSubmit} userState={this.state} currentPage='login'/>
        )}/>
        <Route exact path='/user/new' render={() => (
          this.state.auth
              ? <Redirect to='/user/profile'/>
          : <Register handleFormSubmit={this.handleFormSubmit} userState={this.state} currentPage='new'/>
          )} />
        <Route exact path='/auth/logout' render={() => (<StateController currentPage='home' />)} />

        <Footer />
        
      </div>
    )
  }
}

export default App;
