import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import CuriosityContainer from './components/CuriosityContainer'
import Header from './components/Header'
import ApodContainer from './components/ApodContainer'
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import { loginUser, logoutUser } from './services/user'

const Home = () => <CuriosityContainer/>;
 
const Apod = () => <ApodContainer/>;



class App extends Component {

  state = {
    user: {},
    isLoggedIn: false
  }



  login = (loginParams) => {
    loginUser(loginParams)
      .then((user) => {
        localStorage.setItem("jwtToken", user.jwt)
        this.setState({
          user,
          isLoggedIn: true
        })
      })

  }

  logout = () => {

    logoutUser()
    this.setState({
      user: null,
      isLoggedIn: false
    })
  }

  render() {
    return (

      <div>
          <Header/>
          {/*<img src={logo} className="App-logo" alt="logo" />}*/}

      <div>
        <Route exact path="/" component={Home}/>
        
        <Route exact path="/apod" component={Apod}/>
        <Route exact path="/login" render={()=><LoginForm onLogin={this.login}/>}/>
        </div>
        
    </div>
    );
  }
}

export default App;

