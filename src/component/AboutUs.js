import React from "react";
import About from "../images/About.svg";
import "@fontsource/open-sans";
import "@fontsource/poppins";
const AboutUs = () => {
  return (
    <div className="about_container ">
      <div className="about_box common_display">
        <div className="about_left">
          <img src={About} alt="" />
        </div>
        <div className="about_right">
          <div className="aboutRight_box">
          <div className="about_heading">
            <span> About Us</span>
          </div>
          <div className="about_desc">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </span>
          </div>
          </div>
          <div className="readMore">
            <span>Read More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
