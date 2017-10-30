import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ListContainer from './ListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Communicating amongst Components</h1>
        </header>
        <ListContainer />
      </div>
    );
  }
}

export default App;
