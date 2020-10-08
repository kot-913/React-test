import React, { Component } from "react";
import "./style.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="copywrite">Copywrite</p>
        <div className="footerNav">
          <a href="">Blog</a>
          <a href="">My account</a>
          <a href="">Contact Us</a>
        </div>
      </div>
    );
  }
}

export default Footer;
