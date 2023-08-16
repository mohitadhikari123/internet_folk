import React from "react";
import Logo from "../images/Logo.svg";
import Banner_image from "../images/Banner_image.svg";
import Banner_image_2 from "../images/Banner_image_2.svg";
import "@fontsource/source-sans-pro";
import "@fontsource/open-sans";
const Banner = () => {
  return (
    <div className="banner_container common_display">
      <div className="banner_left common_display">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="banner_heading_container common_display ">
          <div className="banner_heading">
            <p> Discover the  <span>Best</span> Food and Drinks</p>
          </div>
          <div className="banner_desc">
            <span>
              Naturally made Healthcare Products for the better care & support
              of your body.
            </span>
          </div>
          <div className="explore common_display">
            <span>Explore Now!</span>
          </div>
        </div>
      </div>
      <div className="banner_right">
        <div className="banner_image">
          <img src={Banner_image} alt="" />
        </div>
        <div className="banner_image_2">
          <img src={Banner_image_2} alt="" />
        </div>
        <div className="get_in_touch">
            <span>Get In Touch</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
