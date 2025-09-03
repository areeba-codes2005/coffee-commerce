import React from "react";
import { TbLocationFilled } from "react-icons/tb";
import "./ChooseUs.css";
import chous1 from "../../assets/chous1.jpg";
import chous2 from "../../assets/chous2.jpg";
import chous3 from "../../assets/chous3.jpg";

const ChooseUs = () => {
  return (
    <div className="container-fluid cho-us-page">
      <div className="container">
        <div className="row">
          <div className="cho-us-badge" data-aos="fade-up">
            <TbLocationFilled className="location-icon" /> WHY CHOOSE US
          </div>
          <h2 className="cho-us-title" data-aos="fade-up">
            Why You Should Choose Us
          </h2>
          <div
            className="col-12 col-md col-lg mx-md-1 mx-lg-1 chooseus-item"
            style={{ backgroundImage: `url(${chous1})` }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h6 className="chooseus-subtitle">Quality Coffee</h6>
            <div className="chooseus-divider"></div>
            <h4 className="chooseus-description">
              Selection of Super Quality Coffee Beans
            </h4>
          </div>
          <div
            className="col-12 col-md col-lg mx-md-0 mx-lg-1 chooseus-item"
            style={{ backgroundImage: `url(${chous2})` }}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h6 className="chooseus-subtitle">Perfect Blend</h6>
            <div className="chooseus-divider"></div>
            <h4 className="chooseus-description">
              The Secret to the Perfect Coffee Blend
            </h4>
          </div>
          <div
            className="col-12 col-md col-lg mx-md-1 mx-lg-1 chooseus-item"
            style={{ backgroundImage: `url(${chous3})` }}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h6 className="chooseus-subtitle">Perfect Taste</h6>
            <div className="chooseus-divider"></div>
            <h4 className="chooseus-description">
              Lorem Ipsum Dolor Sit Amet Consec
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
