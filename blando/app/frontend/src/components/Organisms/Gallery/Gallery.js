import React, { useEffect } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./styles.css";
function Gallery(props) {
  var images = [];
  var videos = [];
  var items = [];

  if (props.gallery) {
    images = props.gallery.image_set;
    videos = props.gallery.video_set;

    for (let i in images) {
      let image = images[i];
      let newItem = {
        type: "image",
        src: image.image,
        priority: image.priority,
      };

      items.push(newItem);
    }

    for (let i in videos) {
      let video = videos[i];

      let newItem = {
        type: "video",
        embed: video.embed,
        priority: video.priority,
      };

      items.push(newItem);
    }

    items.sort((a, b) => {
      if (a.priority < b.priority) {
        return 1;
      } else if (b.priority < a.priority) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  useEffect(() => {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: "4",
      loop: true,
      grabCursor: false,
      navigation: {
        nextEl: ".gallery-next",
        prevEl: ".gallery-prev",
      },
      observer: true,
      observeParents: true,
    });
  }, []);

  return (
    <div className="">
      <h3 className="gallery-heading">Galeria</h3>
      <div className="container-fluid gallery-con">
        <div className="row">
          <div className="col-1 ">
            <span className="gallery-prev">
              <MdKeyboardArrowLeft className="gallery-icon" />
            </span>
          </div>
          <div className="col-10">
            <div className="swiper-container">
              <div className="swiper-wrapper gallery">
                {items.map((item, index) => {
                  if (item.type == "image") {
                    return (
                      <a
                        index={index}
                        key={index}
                        className="swiper-slide col-sm-3 col-12 image-link"
                        href={item.src}
                      >
                          <img src={item.src} alt="Gallery Image" />
                      </a>
                    );
                  } else {
                    return (
                      <a
                        index={index}
                        key={index}
                        className="swiper-slide col-sm-3 col-12 video-link mfp-iframe"
                        href="https://www.youtube.com/watch?v=fLCjQJCekTs"
                        data-effect="fadeIn"
                      >
                        <div
                          dangerouslySetInnerHTML={{ __html: item.embed }}
                        ></div>
                      </a>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div className="col-1">
            <span className="gallery-next">
              <MdKeyboardArrowRight className="gallery-icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
