import React from "react";
import homeimg from "../../assets/homeimg.jpg";
import "./HomePage.css";
import { FaLeaf } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
      <div className="container-fluid home-page">
        <div
          className="container homimg"
          style={{ backgroundImage: `url(${homeimg})` }}
          data-aos="fade-up"
        ></div>
        <div className="container hero-section">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-7">
              <div className="organic-badge" data-aos="fade-up">
                <FaLeaf className="leaf-icon" /> 100% ORGANIC
              </div>
              <h1
                className="hero-title"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Unique Latte Art Taste With Creamy Milk
              </h1>
            </div>
            <div className="col-12 col-md-5 col-lg-5">
              <p className="hero-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                quia est sed qui illum amet commodi temporibus quasi at error.
                Perferendis velit nostrum, quibusdam nisi autem obcaecati
                dolorem error voluptates.
              </p>
              <button className="shop-btn">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
