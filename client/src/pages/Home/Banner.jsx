import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { MdArrowOutward } from "react-icons/md";

import bannerImg1 from "../../assets/banner/banner1.png";
import bannerImg2 from "../../assets/banner/banner2.png";
import bannerImg3 from "../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div className="relative">
        <img src={bannerImg1} />
        <div className="absolute left-14 bottom-18">
          <button className="btn bg-primary">Track Your Parcel</button>
          <button className="btn btn-secondary btn-circle">
            <MdArrowOutward />
          </button>
          <button className="btn ml-4">Be A Rider</button>
        </div>
      </div>
      <div className="relative">
        <img src={bannerImg2} />
        <div className="absolute left-14 bottom-18">
          <button className="btn bg-primary">Track Your Parcel</button>
          <button className="btn btn-secondary btn-circle">
            <MdArrowOutward />
          </button>
          <button className="btn ml-4">Be A Rider</button>
        </div>
      </div>
      <div className="relative">
        <img src={bannerImg3} />
        <div className="absolute left-14 bottom-18">
          <button className="btn bg-primary">Track Your Parcel</button>
          <button className="btn btn-secondary btn-circle">
            <MdArrowOutward />
          </button>
          <button className="btn ml-4">Be A Rider</button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
