import React, { Component } from "react";
import SocialMediaLink from "../../Atoms/SocialMediaLink/SocialMediaLink";
import "./styles.css";
import {
  faFacebook,
  faFacebookF,
  faSoundcloud,
  faSpotify,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export class SocialMedia extends Component {
  render() {
    console.log(this.props.socialMedia);

    if (this.props.socialMedia) {
      var { instagram, facebook, soundcloud, spotify } = this.props.socialMedia;
    } else {
      var instagram = false;
      var facebook = false;
      var spotify = false;
      var soundcloud = false;
    }
    return (
      <div className="social-media-link-box">
        <h3>
          {this.props.socialMedia
            ? this.props.socialMedia.title
            : "Social Media"}
        </h3>
        <span>
          {facebook && (
            <SocialMediaLink href={facebook} className="social-icons-s" icon={faFacebook} />
          )}

          {instagram && (
            <SocialMediaLink href={instagram} className="social-icons-s" icon={faInstagram} />
          )}

          {soundcloud && (
            <SocialMediaLink href={soundcloud} className="social-icons-s" icon={faSoundcloud} />
          )}

          {spotify && (
            <SocialMediaLink href={spotify} className="social-icons-s" icon={faSpotify} />
          )}
        </span>
      </div>
    );
  }
}

export default SocialMedia;
