import React, { Component } from 'react';
import './header.css';

import { connect } from 'react-redux';



class Header extends Component {
        render() {
            return (
                <div className="Header_Container">
                    <header className="Header">
                        
                        <h1 className="App-title">Welcom to React</h1>
                    </header>
                </div>
            )
        }
    }
    export default Header;