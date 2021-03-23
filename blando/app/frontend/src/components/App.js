import React, { Component } from "react";
import { render } from "react-dom";
import Epic from "./Organisms/Epic/Epic";
import Bio from "./Organisms/Bio";
import Gallery from "./Organisms/Gallery/Gallery";
import Footer from "./Organisms/Footer";
import SocialMedia from "./Organisms/SocialMedia/SocialMedia";
import Releases from "./Organisms/Releases";
import axios from "axios";
import "./fonts.css";
import "bootstrap/dist/css/bootstrap.css";
import "./wipe.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios
      .get("/api/main")
      .then((res) => {
        this.setState({
          ...res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Epic image={this.state.backgroundImage}></Epic>
        <Bio bio={this.state.bio}></Bio>
        <Gallery gallery={this.state.gallery}></Gallery>

        <Releases releases={this.state.releases}></Releases>

        <Footer footer={this.state.footer}></Footer>
        <SocialMedia socialMedia={this.state.socialMedia}></SocialMedia>
      </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
