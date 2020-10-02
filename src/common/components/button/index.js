import React, { Component } from "react";

class Button extends Component {
  handleClick = () => {
    console.log(this.props);
    const { onHomeClick } = this.props;
    onHomeClick();
    // this.props.onHomeClick();// 2 variant
  };

  render() {
    return <button onClick={this.handleClick}>Submit</button>;
  }
}

export default Button;
