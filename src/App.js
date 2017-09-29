import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from '../src/components/Login/Login.js';
import Header from '../src/components/Header/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* { router } */}
        {/* <Header /> */}
        <Login />
      </div>
    );
  }
}

export default App;
