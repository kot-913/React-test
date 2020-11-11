import React, { Component } from "react";
import "./style.scss";

class Button extends Component {
  handleClick = () => {
    const { onHeaderClick } = this.props;
    onHeaderClick();
    // this.props.onHomeClick();// 2 variant
  };

  render() {
    return (
      <button className="btn" onClick={this.handleClick}>
        {this.props.label}
      </button>
    );
  }
}

export default Button;
