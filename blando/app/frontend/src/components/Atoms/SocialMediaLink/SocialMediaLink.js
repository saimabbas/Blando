import React, { Component } from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class SocialMediaLink extends Component {
  render() {
    return (
      <div>
        <a href={this.props.href} target="blank">
          <FontAwesomeIcon icon={this.props.icon} className="releases-icon"/>
        </a>
      </div>
    );
  }
}

export default SocialMediaLink;
