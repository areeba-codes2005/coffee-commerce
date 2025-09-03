import React from "react";
import { TbLocationFilled } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./NewArrival.css";

import coffeebean1 from "../../assets/coffeebean1.png";
import coffeebean2 from "../../assets/coffeebean2.png";
import coffeebean3 from "../../assets/coffeebean3.png";
import coffeebean4 from "../../assets/coffeebean4.png";

const NewArrival = () => {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-12 col-md-8 col-lg-8">
          <div className="new-arri-badge" data-aos="fade-up">
            <TbLocationFilled className="location-icon" /> NEW ARRIVAL
          </div>
          <h2 className="next-fav-title" data-aos="fade-up">
            Your Next Favorite Right Here
          </h2>
        </div>
        <div className="col-12 col-md-4 col-lg-4">
          <Swiper
            className="mynewarrSwiper"
            modules={[Autoplay]}
            spaceBetween={2}
            slidesPerView={2}
            loop={true}
            rewind={true}
            speed={900}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <img src={coffeebean1} alt="Coffee bean" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={coffeebean2} alt="Coffee bean" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={coffeebean3} alt="Coffee bean" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={coffeebean4} alt="Coffee bean" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
