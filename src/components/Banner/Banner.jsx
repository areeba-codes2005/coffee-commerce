import React from "react";
import "./Banner.css";
import banner from "../../assets/banner.jpg";

const Banner = ({ title }) => {
  return (
    <div
      className="container-fluid banner-img-con"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h2 className="banner-heading" data-aos="fade-up">
        {title}
      </h2>
    </div>
  );
};

export default Banner;
