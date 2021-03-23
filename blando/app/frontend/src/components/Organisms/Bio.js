import "./Bio.css";
import React, { Component } from "react";

class Bio extends Component {
  render() {
    return (
      <div>
        <h3 className="bio-heading">
          {this.props.bio ? this.props.bio.title : "Bio"}
        </h3>
        <p className="bio-text">{this.props.bio && this.props.bio.text}</p>
      </div>
    );
  }
}

export default Bio;
