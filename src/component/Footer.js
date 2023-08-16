import React from "react";
import Logo from "../images/Logo.svg";
import Twitter from "../images/Twitter.svg";
import Instagram from "../images/Instagram.svg";
import Facebook from "../images/Facebook.svg";
import "@fontsource/source-sans-pro";
import "@fontsource/roboto";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_box">
        <div className="footer_logo">
          <img src={Logo} alt="" />
        </div>
        <div className="right_one">
          <div className="right_one_title">
            <span>Contact Us</span>
          </div>
          <div className="right_one_desc">
            <span>
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </span>
          </div>
          <div className="right_one_email">
            <span>example2020@gmail.com</span>
          </div>
          <div className="right_one_contact">
            <span>(904) 443-0343</span>
          </div>
        </div>
        <div className="right_two">
          <div className="right_two_more">
            <span>More</span>
          </div>
          <div className="right_two_remain">
            <span>About Us</span>
            <span>Products</span>
            <span>Career</span>
            <span>Contact Us</span>
          </div>
        </div>
        <div className="right_three">
          <div className="links">
            <div className="social_links">
              <span>Social Links</span>
            </div>
            <div className="icons">
              <span>
                <img src={Instagram} alt="" />
              </span>
              <span>
                <img src={Twitter} alt="" />
              </span>
              <span>
                <img src={Facebook} alt="" />
              </span>
            </div>
          </div>
          <div className="copyright">
            <span>© 2022 Food Truck Example</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
