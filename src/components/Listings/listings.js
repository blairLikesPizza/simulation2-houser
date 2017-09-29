import React, { Component } from 'react';
import './listings.css';


import { connect } from "react-redux";


class Listings extends Component {
    constructor() {
      super();
      render() {
        return(
          <div id="Listings__parent">
            <Header />
            <button className="Add__New__Prop" >Add new property</button>
            <h1>List properties with "desired rent" GREATER than: $</h1>
            <input className="Listings__amount" />
            <div id="Home__Listings__Container">


              
              </div>
            </div>
        )
      }