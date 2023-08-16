import React from "react";
import "@fontsource/source-sans-pro";

// import Articles1 from "../images/Articles1.svg";

const Card = ({ item }) => {
  return (
    <div className="card_container">
      <div className="card_left">
        <img src={item.img} alt="" />
      </div>
     <div className="card_right_box">
     <div className="card_right">
        <div className="card_title_box">
          <div className="card_title">
            <span>{item.title}</span>
          </div>
          <div className="card_desc">
            PLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard...
          </div>
        </div>
        <div className="button common_display">
          <span>Read More</span>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Card;
