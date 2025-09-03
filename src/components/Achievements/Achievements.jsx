import React from "react";
import { GiAchievement } from "react-icons/gi";
import "./Achievements.css";
import achieve1 from "../../assets/achieve1.jpg";
import achieve2 from "../../assets/achieve2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CountUp from "react-countup";

const Achievements = () => {
  return (
    <div className="container-fluid acieve-page">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-8">
            <div className="achieve-badge" data-aos="fade-up">
              <GiAchievement className="achieve-icon" />
              <span>ACHIEVEMENTS</span>
            </div>
            <h2 className="achieve-title" data-aos="fade-up">
              Your Next Favorite Right Here
            </h2>
          </div>
          <div className="col-12 col-md-4 col-lg-4 mt-5 ach-lemo-box">
            <button className="ler-mor-btn">Learn More</button>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <Swiper
              className="myachiSwiper"
              modules={[Autoplay]}
              slidesPerView={1}
              loop={true}
              rewind={true}
              speed={900}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <img src={achieve1} alt="Coffee bean" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={achieve2} alt="Coffee" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-12 col-md-8 col-lg-8">
            <div className="d-flex justify-content-between align-items-center counter-box">
              <h5
                className="counter-title"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                Client satisfaction
              </h5>
              <span
                className="counter-number"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <CountUp
                  start={0}
                  end={1500}
                  duration={3}
                  suffix="+"
                  separator=""
                  enableScrollSpy
                  scrollSpyDelay={150}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </span>
            </div>
            <hr className="counter-hr" />
            <div className="d-flex justify-content-between align-items-center counter-box">
              <h5
                className="counter-title"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                Partners Who Join Us
              </h5>
              <span
                className="counter-number"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <CountUp
                  start={0}
                  end={1200}
                  duration={3}
                  suffix="+"
                  separator=""
                  enableScrollSpy
                  scrollSpyDelay={150}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </span>
            </div>
            <hr className="counter-hr" />
            <div className="d-flex justify-content-between align-items-center counter-box">
              <h5
                className="counter-title"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                Consistent in Quality Products
              </h5>
              <span
                className="counter-number"
                data-aos="fade-left"
                data-aos-delay="700"
              >
                <CountUp
                  start={0}
                  end={99}
                  duration={3}
                  suffix="+"
                  separator=""
                  enableScrollSpy
                  scrollSpyDelay={150}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </span>
            </div>
            <hr className="counter-hr" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
