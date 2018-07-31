import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header />
        </div>
        <div className="App">
          hello world!
        </div>
        <div className="App">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
