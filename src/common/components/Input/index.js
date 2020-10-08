import React, { Component } from "react";
import "./style.scss";

class Input extends Component {
  state = {
    inputValue: "",
  };

  handleInput = (event) => {
    console.log(event.target.value);
    console.log(this.state);
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    console.log(this.props);
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
