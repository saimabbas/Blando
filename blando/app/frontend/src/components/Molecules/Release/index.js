import React from "react";
import SocialMediaLink from "../../Atoms/SocialMediaLink/SocialMediaLink";
import "./styles.css";

import { faSpotify } from "@fortawesome/free-brands-svg-icons";

function Releases(props) {
  return (
    <div className="swiper-slide col-3">
      <span>
        <img src={props.imageSrc} />
        <div className="releases-text-box">
          <p>{props.name}</p>
          <div>
            <SocialMediaLink size={"3x"} icon={faSpotify} href={props.link} />
          </div>
        </div>
      </span>
    </div>
  );
}

export default Releases;
