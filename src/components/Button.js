/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import App from "App";

class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button 
        type={this.props.type}
        value={this.props.value}
        onClick={this.props.clickFunc}
      />
    )
  }
}

export default Button;