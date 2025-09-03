import React from "react";
import { IoCall, IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./DropContact.css";
import droconnews from "../../assets/droconnews.jpg";

const DropContact = () => {
  return (
    <div className="dro-contact-page">
      <div className="container get-news-con my-5">
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-8">
            <div className="form-wrapper p-4 h-100">
              <h3 className="section-title mb-4">Get in Touch</h3>
              <form>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="dro-con-send">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="newsletter-wrapper p-4 h-100"
              style={{ backgroundImage: `url(${droconnews})` }}
            >
              <h3 className="our-news-title">Our Newsletter</h3>
              <p>
                I am text block. Click edit button to change this text. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter your email"
              />
              <button className="se-em w-100">Send Email</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row g-4">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="contact-box-first d-flex">
              <div className="me-3">
                <IoCall size="2rem" className="iocall" />
              </div>
              <div>
                <h5>(+1) 234 56 789</h5>
                <p>
                  I am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4">
            <div className="contact-box d-flex">
              <div className="me-3">
                <IoMail size="2rem" className="iomail" />
              </div>
              <div>
                <h5>ex@domain.com</h5>
                <p>
                  I am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4">
            <div className="contact-box d-flex">
              <div className="me-3">
                <FaMapMarkerAlt size="2rem" className="famap" />
              </div>
              <div>
                <h5>633, Northwest , Ecuador</h5>
                <p>
                  I am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid map-container">
        <div className="container my-5" data-aos="zoom-in">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d318233.9436823826!2d-0.149732!3d51.454435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1756885813044!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropContact;
