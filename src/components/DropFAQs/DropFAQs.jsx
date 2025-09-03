import React from "react";
import { FaQuestion } from "react-icons/fa";
import "./DropFAQs.css";

const DropFAQs = ({ infoCards, faqCards }) => {
  return (
    <div>
      <div className="container-fluid in-car-con">
        <div className="container">
          <div className="row">
            {infoCards.map((card, index) => (
              <div className="col-12 col-md-6 col-lg-3" key={index}>
                <div className="card  border-0 rounded-1 in-car">
                  <div className="in-ico">{card.icon}</div>
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container faq-car-con">
        <h2 className="faq-car-heading" data-aos="fade-up">
          Frequently Asked Questions
        </h2>
        <div className="row">
          {faqCards.map((faq, index) => (
            <div className="col-12 col-md-6 col-lg-6 mb-3" key={index}>
              <div className="card rounded-0 faq-car">
                <div className="card-body d-flex">
                  <div className="me-3 d-flex align-items-center justify-content-center yel-cir">
                    <FaQuestion size={22} color="#FFFFFF" />
                  </div>
                  <div>
                    <h5 className="card-title">{faq.question}</h5>
                    <p className="card-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropFAQs;
