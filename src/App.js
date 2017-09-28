import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import CuriosityContainer from './components/CuriosityContainer'
import Header from './components/Header'
import ApodContainer from './components/ApodContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <img src={logo} className="App-logo" alt="logo" />

        <CuriosityContainer/>
        <ApodContainer/>
      </div>
    );
  }
}

export default App;
