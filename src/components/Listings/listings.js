import React, { Component } from 'react';
import './listings.css';
import Header from '../Header/Header.js'
import { Link } from 'react-router-dom';


import { connect } from "react-redux";


class Listings extends Component {

  render() {
    return (
      <div id="Listings__parent">
        <Header />
        <Link to="/stepOne"><button className="Add__New__Prop" >Add new property</button></Link>
        <h1>List properties with "desired rent" GREATER than: $</h1>
        <input className="Listings__amount" />
        <div id="Home__Listings__Container">

        </div>
      </div>
    )
  }
}
export default Listings;
