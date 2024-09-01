import React from "react";
import { Carousel } from "@material-tailwind/react";
import carousel1 from "../assets/images/carousel1.jpg";
import carousel2 from "../assets/images/carousel2.jpg";
import carousel3 from "../assets/images/carousel3.jpg";
import carousel4 from "../assets/images/carousel4.jpg";
import carousel5 from "../assets/images/carousel5.jpg";

const Slider = () => {
  return (
    <>
      <div>
        <Carousel className="" autoplay interval={3000}>
          <img src={carousel1} className="h-full w-full object-cover" />
          <img
            src={carousel2}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src={carousel3}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src={carousel4}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src={carousel5}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
