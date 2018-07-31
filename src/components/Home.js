import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      age:props.age,
      linkText:'new header'
    }
    this.onMakeOlder = this.onMakeOlder.bind(this)
    this.onHandleClick = this.onHandleClick.bind(this)
    this.onChangeHeaderText = this.onChangeHeaderText.bind(this)
  }

  onMakeOlder() {
    this.setState(prevState=>({
      age: prevState.age+3
    }));
  }

  onHandleClick(){
    this.props.onGreet(this.state.age)
  }

  onChangeHeaderText(){
    this.props.onChangeHeaderText(this.state.linkText)
  }

  render() {
    return (
      <div className="App">
        <div>your name is {this.props.name}</div>
        <div>your age is {this.state.age}</div>
        <button  onClick={this.onMakeOlder}>
          older 3 ages
        </button>
        <br/>
        <button onClick={this.onHandleClick}>
          回传，显示年龄
        </button>
        <br/>
        <button onClick={this.onChangeHeaderText}>
          单击此按钮，将Home组件中的值传递给Header组件，中间通过共同的父组件App
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
