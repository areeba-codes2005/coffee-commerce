import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { TiStarFullOutline } from "react-icons/ti";
import "swiper/css";
import "swiper/css/pagination";
import "./NewFlavors.css";

const NewFlavors = ({ defaultImage, coffeeData, heading }) => {
  const [activeId, setActiveId] = useState(1);

  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="container new-flv-con">
      <div className="row">
        {/* Left Fixed Image */}
        <div className="col-12 col-md-6 col-lg-6 g-0">
          <img
            src={defaultImage}
            alt="Coffee Cup"
            className="img-fluid left-img"
          />
        </div>

        {/* Right Accordion */}
        <div className="col-12 col-md-6 col-lg-6 rig-acc-col">
          <h2 className="new-flv-hea" data-aos="fade-up">
            {heading}
          </h2>

          <div className="coffee-accordion">
            {coffeeData.map((item) => (
              <div
                key={item.id}
                className={`coffee-accordion-item ${
                  activeId === item.id ? "active" : ""
                }`}
              >
                {/* Header */}
                <div
                  className={`coffee-accordion-header ${
                    activeId === item.id ? "active" : ""
                  }`}
                  onClick={() => toggleItem(item.id)}
                >
                  <h6 className="acc-title">{item.title}</h6>
                  <span className="toggle-icon">
                    {activeId === item.id ? "−" : "+"}
                  </span>
                </div>

                {/* Body */}
                {activeId === item.id && (
                  <div className="coffee-accordion-content">
                    <div className="coffee-details">
                      {/* Stars */}
                      <div>
                        {[...Array(item.rating)].map((_, i) => (
                          <span key={i} className="star">
                            <TiStarFullOutline />
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="acc-des">{item.description}</p>

                      {/* Badge + Price + Button */}
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <span
                          className={`av-ou-badge ${
                            item.available
                              ? "badge-available"
                              : "badge-outofstock"
                          }`}
                        >
                          {item.available ? "AVAILABLE" : "OUT OF STOCK"}
                        </span>
                        <span className="price">
                          <span>From</span> ${item.price}
                        </span>
                        <button className="or-now-btn">Order Now</button>
                      </div>
                    </div>

                    {/* Swiper Carousel */}
                    <div className="coffee-swiper">
                      <Swiper
                        loop={true}
                        rewind={true}
                        speed={900}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                      >
                        {item.images.map((img, index) => (
                          <SwiperSlide key={index}>
                            <div className="coffee-img-wrapper">
                              <img
                                src={img}
                                alt={`Coffee Slide ${index + 1}`}
                                className="small-coffee-img"
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFlavors;
