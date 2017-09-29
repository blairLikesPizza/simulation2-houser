import React, { Component } from 'react';
import './App.css';

import router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        
         { router } 
        
        {/* <Header /> */}
        
      </div>
    );
  }
}

export default App;
