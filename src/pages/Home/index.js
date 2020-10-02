import React, { Component } from "react";
import Button from "../../common/components/button";
import Input from "../../common/components/Input";
import "./style.scss";

class HomePage extends Component {
  state = {
    inputIsDisabled: true,
  };

  onHandleOnHomeClick = () => {
    console.log("User clicked");
    const { inputIsDisabled } = this.state;
    this.setState({
      inputIsDisabled: !inputIsDisabled,
    });
  };

  render() {
    const { inputIsDisabled } = this.state;

    return (
      <div className="home">
        <Input placeholder="value" disable={inputIsDisabled} />
        <Button onHomeClick={this.onHandleOnHomeClick} />
      </div>
    );
  }
}

export default HomePage;
