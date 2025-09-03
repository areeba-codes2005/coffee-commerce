import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid con-row">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <img src={logo} alt="Logo" className="img-fluid con-img" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <h4 className="c-sub">
                The Coffee You Are Looking for Is Not Here?
              </h4>
              <button className="con-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-back">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-12 col-md-12 col-lg-4 info-box">
              <h6>OUR OFFICE</h6>
              <h4>
                544, Northwest, California et dolore magna minim aliqua
                2345-9383
              </h4>
              <h6>NEWSLETTER</h6>
              <div className="in-and-btn">
                <input type="email" placeholder="Email" />
                <button className="fot-se-btn">Send</button>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 list-box">
              <div>
                <h5>Quick Menu</h5>
                <ul className="list-unstyled">
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Our Blog</li>
                  <li>FAQs</li>
                </ul>
              </div>
              <div>
                <h5>Useful Links</h5>

                <ul className="list-unstyled">
                  <li>Customer Services</li>
                  <li>Order Tracking</li>
                  <li>Payment</li>
                  <li>Wishlist</li>
                </ul>
              </div>
              <div>
                <h5>Information</h5>
                <ul className="list-unstyled">
                  <li>+1234 567 89</li>
                  <li>(031) 8976 54321</li>
                  <li>ex@domain.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
