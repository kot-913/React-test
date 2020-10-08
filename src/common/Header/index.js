import React, { Component } from "react";
import "./style.scss";
import Button from "../../common/components/button-add-to-favorite";
import Input from "../../common/components/Input";

class Header extends Component {
  onHandleOnHeaderClick = () => {
    console.log("User clicked");
  };

  render() {
    return (
      <div className="header">
        <div className="header-text">
          <h1 className="header-uptext">Top Rated News</h1>
          <span className="allOver">all over the world</span>
        </div>
        <div className="header-operators">
          <Input placeholder="Search" />
          <Button onHeaderClick={this.onHandleOnHeaderClick} />
        </div>
      </div>
    );
  }
}

export default Header;
