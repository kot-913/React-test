import React, { Component } from "react";
import "./style.scss";

class Input extends Component {
  state = {
    inputValue: "",
  };

  handleInput = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    const { placeholder } = this.props;

    return (
      <input
        className="input"
        onChange={this.handleInput}
        placeholder={placeholder}
      />
    );
  }
}

export default Input;
