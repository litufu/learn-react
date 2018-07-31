import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      age:props.age
    }
    this.onMakeOlder = this.onMakeOlder.bind(this)
  }

  onMakeOlder() {
    this.setState(prevState=>({
      age: prevState.age+3
    }));
  }

  render() {
    return (
      <div className="App">
        <div>your name is {this.props.name}</div>
        <div>your age is {this.state.age}</div>
        <button  onClick={this.onMakeOlder}>
          older 3 ages
        </button>
        <div>
          hobbies:
          <ul>
            {this.props.user.hobbies.map((hobby,index)=><li key={index}>{hobby}</li>)}
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}


Home.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number,
  user:PropTypes.object,
  children:PropTypes.element.isRequired
}
