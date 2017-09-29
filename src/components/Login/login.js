import React, { Component } from "react";
import './login.css';
import Houser2 from '../../Houser2.jpg';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

import { connect } from "react-redux";
import { loginName, loginPassword, registerName, registerPassword } from "../../ducks/reducer";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    // this.login = this.login.bind(this);
    // this.register = this.register.bind(this);

    this.handleChange = this.handleChange.bind( this );
  }

  // login() {
  //   const { login, history } = this.props;
  //   const { username, password } = this.state;
  //   login({ username, password }, history);
  // }

  // register() {
  //   const { register, history } = this.props;
  //   const { username, password } = this.state;
  //   register({ username, password }, history);
  // }


  handleChange(prop, val) {
    this.setState({ [prop]: val });
  }

  render() {
    return (
      <div id="Login__parent">
        <div id="Login__child">
        <img src={Houser2} className="App-logo" alt="logo" />
          <input className="Login__input" type="text" placeholder="Username" onChange={(e) => this.handleChange('username', e.target.value)} />
          <input className="Login__input" type="password" placeholder="Password" onChange={(e) => this.handleChange('password', e.target.value)} />
          
          <div>
          
            <Link to='/listings'><button className="Login__btn" id="Login__loginBtn">Login </button></Link>
            <button className="Login__btn" id="Login__registerBtn">Register </button>
          </div>
         
        </div>
      </div>
    )
  }
}


export default connect( state => state, { loginName, loginPassword, registerName, registerPassword } )( Login );