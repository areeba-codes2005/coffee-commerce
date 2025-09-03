import React from "react";
import "./ShopCategory.css";
import categoryimg1 from "../../assets/categoryimg1.jpg";
import categoryimg2 from "../../assets/categoryimg2.jpg";
import categoryimg3 from "../../assets/categoryimg3.jpg";

const ShopCategory = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <h2 className="category-title" data-aos="fade-up">
            Shop by Category
          </h2>
          <div className="col-12 col-md-4 col-lg-4">
            <p className="category-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
              aspernatur itaque adipisci excepturi modi.
            </p>
            <button className="ex-category-btn">Explore Categories</button>
          </div>
          <div className="col-md col-lg col-sm-12" data-aos="fade-up">
            <img
              src={categoryimg1}
              alt="Cup of coffee"
              className="img-fluid rounded-1"
            />
            <h5 className="product-title">Coffee Latte</h5>
          </div>
          <div
            className="col-md col-lg col-sm-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src={categoryimg2}
              alt="Cup of coffee"
              className="img-fluid rounded-1"
            />
            <h5 className="product-title">Americano</h5>
          </div>
          <div
            className="col-md col-lg col-sm-12"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img
              src={categoryimg3}
              alt="Cup of coffee"
              className="img-fluid rounded-1 product"
            />
            <h5 className="product-title">Espresso</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
