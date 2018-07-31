import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      linkText:'Header'
    }
    this.onChangeHeaderText = this.onChangeHeaderText.bind(this)
  }
  onGreet(age){
    alert(age)
  }

  onChangeHeaderText(text){
    this.setState({
      linkText:text
    })
  }
  render() {
    let user = {
      hobbies:['run','swim']
    }
    return (
      <div>
        <div className="App">
          <Header linkText={this.state.linkText}/>
        </div>
        <div className="App">
          hello world!
        </div>
        <div className="App">
          <Home
            name={'litufu'}
            age={12}
            user={user}
            onGreet={this.onGreet}
            initialText={this.state.linkText}
            onChangeHeaderText={this.onChangeHeaderText}
          >
            <p> this is  a child </p>
          </Home>
        </div>
      </div>
    );
  }
}

export default App;
