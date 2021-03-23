import React, {useEffect} from "react";
import Release from "../../Molecules/Release";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import "./styles.css";

function Releases(props){
    console.log(props.releases);

    if (props.releases) {
      var releases = props.releases.release_set;
    } else {
      var releases = [];
    }

      useEffect(() => {
        var swiper = new Swiper(".swiper-releases", {
          slidesPerView: "4",
          loop: true,
          grabCursor: false,
          navigation: {
            nextEl: ".releases-next",
            prevEl: ".releases-prev",
          },
          observer: true,
          observeParents: true,
        });
      }, []);

    return (
      <div>
        <h3 className="releases-heading">Releases</h3>
        <div className="container-fluid releases-con">
          <div className="row">
            <div className="col-1">
              <span className="releases-prev">
                <MdKeyboardArrowLeft className="releases-icon" />
              </span>
            </div>
            <div className="col-10">
              <div className="swiper-releases">
                <div className="swiper-wrapper">
                  {releases.map((release) => {
                    return (
                      <Release
                        key={release.id}
                        name={release.title}
                        imageSrc={release.image}
                        link={release.link_spotify}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-1">
              <span className="releases-next">
                <MdKeyboardArrowRight className="releases-icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Releases;
