import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'

class App extends Component {
  render() {
    let user = {
      hobbies:['run','swim']
    }
    return (
      <div>
        <div className="App">
          <Header />
        </div>
        <div className="App">
          hello world!
        </div>
        <div className="App">
          <Home name={'litufu'} age={12} user={user}>
            <p> this is  a child </p>
          </Home>
        </div>
      </div>
    );
  }
}

export default App;
