import React, { Component } from "react";
import "./style.scss";

class Button extends Component {
  handleClick = () => {
    console.log(this.props);
    const { onHeaderClick } = this.props;
    onHeaderClick();
    // this.props.onHomeClick();// 2 variant
  };

  render() {
    return (
      <button className="btn" onClick={this.handleClick}>
        Add to favorite
      </button>
    );
  }
}

export default Button;
