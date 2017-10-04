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
import Signup from './components/Signup'
import AsteroidContainer from './components/AsteroidContainer'
import Footer from './components/Footer'


const Apod = () => <ApodContainer/>;

class App extends Component {

  state = {
    user: '',
    isLoggedIn: false,
    id: ''
  }

  login = (loginParams) => {
    loginUser(loginParams)
      .then((resp) => {
        localStorage.setItem("jwtToken", resp.jwt)
        this.setState({
          user: resp,
          isLoggedIn: true,
          name: resp.user.username
        })
      })
  }

  logout = () => {

    logoutUser()
    this.setState({
      user: null,
      isLoggedIn: false,
      id: null,
      name: null
    })
  }

  render() {
      const AuthHomepageContainer = Authorize(HomepageContainer)
      const AuthLoginForm = Authorize(LoginForm)
      const style =  {
        'min-height': 'calc(100vh - 120px)'
      }

      return (

        <div>
            <Header handleLogout={this.logout} name={this.state.name} />

            <div style={style}>
              <Route exact path="/asteroids" render={ () => <AsteroidContainer/> }/>
              <Route exact path="/" render={(props) => <CuriosityContainer userid={this.state.id} />} />
              {/* IF NOT LOGGED IN CANT GET TO BELOW */}
              <Route exact path="/apod" component={Apod}/>
              <Route exact path="/homepage" render={(props) => <AuthHomepageContainer userid={this.state.id} {...props} />}/>

              <Route exact path="/login" render={(props)=><AuthLoginForm onLogin={this.login} {...props} />}/>
              <Route exact path="/signup" render={(props)=><Signup />}/>
            </div>
            <div>
              <Footer/>
            </div>
        </div>
      );

  }
}

export default App;
