import React from "react";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import "./Gallery.css";

const galleryImages = [
  "https://ik.imagekit.io/mv3sctrmq/The%20kitchen%20chiswick/CopyofSBS01813.JPG",
  "https://ik.imagekit.io/mv3sctrmq/The%20kitchen%20chiswick/CopyofSBS01737.JPG",
  "https://ik.imagekit.io/mv3sctrmq/The%20kitchen%20chiswick/CopyofSBS01735.JPG",
  "https://ik.imagekit.io/mv3sctrmq/The%20kitchen%20chiswick/CopyofSBS01755.JPG",
  "https://ik.imagekit.io/mv3sctrmq/The%20kitchen%20chiswick/CopyofSBS01761.JPG",
  "https://ik.imagekit.io/mv3sctrmq/The%20kitchen%20chiswick/CopyofSBS01753.JPG",
  "https://ik.imagekit.io/mv3sctrmq/The%20kitchen%20chiswick/CopyofSBS01646.JPG",
  "https://ik.imagekit.io/mv3sctrmq/The%20kitchen%20chiswick/CopyofSBS01718.JPG"
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      const { current } = scrollRef;
      if (current) {
        // Check if we've reached the end, if so, scroll back to start
        if (current.scrollLeft >= current.scrollWidth - current.clientWidth) {
          current.scrollLeft = 0;
        } else {
          current.scrollLeft += 300;
        }
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Memories" />
        <h1 className="headtext__cormorant">Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Discover the vibrant flavors and elegant ambiance of THE KITCHEN through our curated photo gallery.
        </p>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
