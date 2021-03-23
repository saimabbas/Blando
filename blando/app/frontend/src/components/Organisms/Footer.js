import React, { Component } from "react";
import "./Bio.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-s">
        <div className="col-12 m-0">
          <p>{this.props.footer && this.props.footer.text_left}</p>
          <p>{this.props.footer && this.props.footer.text_right}</p>
        </div>
      </div>
    );
  }
}

export default Footer;
