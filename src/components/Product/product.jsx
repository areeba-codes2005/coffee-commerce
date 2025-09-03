import React from "react";
import "./product.css";

const product = ({ icon: Icon, subtitle, title, data }) => {
  return (
    <div className="container">
      <div className="row mt-5">
        {(Icon || subtitle) && (
          <div className="section-badge" data-aos="fade-up">
            {Icon && <Icon className="badge-icon" />}
            {subtitle && <span>{subtitle}</span>}
          </div>
        )}
        {title && (
          <h2 className="section-title" data-aos="fade-up">
            {title}
          </h2>
        )}
        {data.map((item, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-3 position-relative mb-3"
            data-aos="fade-up"
          >
            {item.badge && <span className="sale-badge">{item.badge}</span>}
            <img
              src={item.image}
              alt={item.name}
              className="img-fluid product"
            />
            <h6 className="product-name">{item.name}</h6>
            {item.oldPrice && (
              <span className="product-oldpri">
                {item.oldPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            )}
            <span className="product-price">
              {item.newPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
            <button className="pro-add-car">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default product;
