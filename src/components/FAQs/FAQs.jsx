import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { faqData } from "../data/FAQsData";
import "./FAQs.css";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="container">
        <div className="row FAQs-row">
          <div className="col-12 col-md-7 col-lg-7">
            <div
              className="FAQs-badge"
              data-aos="fade-up"
              data-aos-offset="600"
            >
              <FaQuestion className="FAQs-icon" />
              <span>FAQS</span>
            </div>
            <h2
              className="FAQs-heading"
              data-aos="fade-up"
              data-aos-offset="600"
            >
              Need Help? We Have a Solution
            </h2>
          </div>
          <div className="col-12 col-md-5 col-lg-5 FAQs-p-box">
            <p className="FAQs-para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              expedita excepturi quisquam, sit qui recusandae tempore? Quasi
              recusandae optio labore!
            </p>
          </div>
          <div className="col-12 col-md-12 col-lg-12">
            <div className="accordion" data-aos="fade-up" data-aos-offset="600">
              {faqData.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <div
                    className={`accordion-item-header ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                    style={{
                      backgroundColor:
                        activeIndex === index ? "#623D2D" : "#F0ECEA",
                      color: activeIndex === index ? "#FFFFFF" : "#111111",
                      borderRadius: "3px",
                    }}
                  >
                    {item.question}
                  </div>
                  <div
                    className="accordion-item-body"
                    style={{
                      maxHeight: activeIndex === index ? "1000px" : "0",
                      transition: "max-height 0.3s ease-out",
                    }}
                  >
                    <div className="accordion-item-body-content">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
