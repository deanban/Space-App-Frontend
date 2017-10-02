import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import CuriosityContainer from './components/CuriosityContainer'
import Header from './components/Header'
import ApodContainer from './components/ApodContainer'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import { loginUser, logoutUser } from './services/user'
import HomepageContainer from './components/HomepageContainer'
import Authorize from './components/Authorize'



 
const Apod = () => <ApodContainer/>;

class App extends Component {

  state = {
    user: {},
    isLoggedIn: false,
    id: ''
  }
 

  login = (loginParams) => {
    loginUser(loginParams)
      .then((user) => {
        localStorage.setItem("jwtToken", user.jwt)
        this.setState({
          user,
          isLoggedIn: true,
          id: user.id
        })
      })

  }

  logout = () => {

    logoutUser()
    this.setState({
      user: null,
      isLoggedIn: false,
      id: null
    })
  }

  render() {
      const AuthHomepageContainer = Authorize(HomepageContainer)
      const AuthLoginForm = Authorize(LoginForm)
      return (

        <div>
            <Header handleLogout={this.logout} />

            <div> 
              <Route exact path="/" render={(props) => <CuriosityContainer user_id={this.state} />} />
              {/* IF NOT LOGGED IN CANT GET TO BELOW */}
              <Route exact path="/apod" component={Apod}/>
              <Route exact path="/homepage" render={(props) => <AuthHomepageContainer userid={this.state.userId} {...props}/>}/>

              <Route exact path="/login" render={(props)=><AuthLoginForm onLogin={this.login} {...props} />}/>
            </div>
          
        </div>
      ); 
    
  }
}

export default App;

