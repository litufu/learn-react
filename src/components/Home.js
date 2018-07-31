import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div>your name is {this.props.name}</div>
        <div>your age is {this.props.age}</div>
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
