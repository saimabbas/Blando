import React, { Component } from "react";
import "./styles.css";

export class Epic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-100">
        <img
          src={this.props.image}
          className="epic_image"
          style={{ height: "100vh", width: "100vw" }}
        ></img>
      </div>
    );
  }
}

export default Epic;
