import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import achieve2 from "../../assets/achieve2.jpg";
import achieve1 from "../../assets/achieve1.jpg";
import newProcoff1 from "../../assets/newProcoff1.jpg";
import testiimg from "../../assets/testi-img.png";
import newArrcoff1 from "../../assets/newArrcoff1.jpg";
import newArrcoff4 from "../../assets/newArrcoff4.jpg";
import newProcoff3 from "../../assets/newProcoff3.jpg";

const Testimonials = () => {
  return (
    <div className="container-fluid testi-page">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="testi-badge" data-aos="fade-up">
              <FaQuoteLeft className="testi-icon" />
              <span>TESTIMONIALS</span>
            </div>
            <h2 className="testi-heading mb-4" data-aos="fade-up">
              What Clients Say About Us
            </h2>
            <Swiper
              loop={true}
              rewind={true}
              speed={900}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[EffectCreative, Autoplay]}
              className="mytestiSwiper1"
              data-aos="fade-up"
            >
              <SwiperSlide>
                <div className="testi-box">
                  <div className="testi-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero animi odit iusto reprehenderit quibusdam officia!
                  </div>
                  <div className="testi-person d-flex">
                    <img src={achieve2} alt="Coffee" className="testi-photo" />
                    <div className="d-flex flex-column ps-2">
                      <span className="testi-name">
                        <strong>John Doe</strong>
                      </span>{" "}
                      <span className="testi-role">CEO</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testi-box">
                  <div className="testi-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero animi odit iusto reprehenderit quibusdam officia!
                  </div>
                  <div className="testi-person d-flex">
                    <img src={achieve1} alt="Coffee" className="testi-photo" />
                    <div className="d-flex flex-column ps-2">
                      <span className="testi-name">
                        <strong>John Doe</strong>
                      </span>{" "}
                      <span className="testi-role">CEO</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testi-box">
                  <div className="testi-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero animi odit iusto reprehenderit quibusdam officia!
                  </div>
                  <div className="testi-person d-flex">
                    <img
                      src={newProcoff1}
                      alt="Coffee"
                      className="testi-photo"
                    />
                    <div className="d-flex flex-column ps-2">
                      <span className="testi-name">
                        <strong>John Doe</strong>
                      </span>{" "}
                      <span className="testi-role">CEO</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="d-none d-lg-block col-lg-3">
            <img src={testiimg} alt="Cup of coffee" className="testi-cocup" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 bmt-1">
            <Swiper
              loop={true}
              rewind={true}
              speed={900}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[EffectCreative, Autoplay]}
              className="mytestiSwiper1"
              data-aos="fade-up"
            >
              <SwiperSlide>
                <div className="testi-box">
                  <div className="testi-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero animi odit iusto reprehenderit quibusdam officia!
                  </div>
                  <div className="testi-person d-flex">
                    <img
                      src={newArrcoff1}
                      alt="Coffee"
                      className="testi-photo"
                    />
                    <div className="d-flex flex-column ps-2">
                      <span className="testi-name">
                        <strong>John Doe</strong>
                      </span>{" "}
                      <span className="testi-role">CEO</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testi-box">
                  <div className="testi-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero animi odit iusto reprehenderit quibusdam officia!
                  </div>
                  <div className="testi-person d-flex">
                    <img
                      src={newArrcoff4}
                      alt="Coffee"
                      className="testi-photo"
                    />
                    <div className="d-flex flex-column ps-2">
                      <span className="testi-name">
                        <strong>John Doe</strong>
                      </span>{" "}
                      <span className="testi-role">CEO</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testi-box">
                  <div className="testi-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero animi odit iusto reprehenderit quibusdam officia!
                  </div>
                  <div className="testi-person d-flex">
                    <img
                      src={newProcoff3}
                      alt="Coffee"
                      className="testi-photo"
                    />
                    <div className="d-flex flex-column ps-2">
                      <span className="testi-name">
                        <strong>John Doe</strong>
                      </span>{" "}
                      <span className="testi-role">CEO</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <h2 className="testi-heading mt-4" data-aos="fade-up">
              And We Believe Them
            </h2>
          </div>
          <div className="col-sm-12 col-md-12 d-lg-none">
            <img src={testiimg} alt="Cup of coffee" className="testi-cocup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
