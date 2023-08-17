import React, { useState } from "react";
import Articles1 from "../images/Articles1.svg";
import Articles2 from "../images/Articles2.svg";
import Articles3 from "../images/Articles3.svg";
import Articles4 from "../images/Articles4.svg";
import Articles5 from "../images/Articles5.svg";
import Articles6 from "../images/Articles6.svg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fontsource/source-sans-pro";
import Card from "./Card";  
const options = {
  margin: 0, 
  responsiveClass: true,
  nav: true,
  navSpeed:200,
  autoplay: false,
  navText: ["<", ">" ],
  slideBy: 3,
  smartSpeed: 1000,

  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1400: {
      items: 3,
    },
  },
};
const Articles = () => {
    const [page,setPage] = useState('1')
  const data = [
    {
      id: 1,
      img: Articles1,
      title: "Grilled Tomatoes at Home",
    },
    {
      id: 2,
      img: Articles2,
      title: "Snacks for Travel",
    },
    {
      id: 3,
      img: Articles3,
      title: "Post-workout Recipes",
    },
    {
      id: 4,
      img: Articles4,
      title: "How To Grill Corn",
    },
    {
      id: 5,
      img: Articles5,
      title: "Crunchwrap Supreme",
    },
    {
      id: 6,
      img: Articles6,
      title: "Broccoli Cheese Soup",
    },
  ];
  return (
    <div className="articles_container">
      <div className="articles_title">Latest Articles</div>
      <OwlCarousel className="slider-items owl-carousel" {...options}>
        {data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
        
      </OwlCarousel>
      <div className="page">
        <span>{page}/2</span>
      </div>
    </div>
  );
};

export default Articles;
