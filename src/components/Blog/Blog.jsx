import React from "react";
import "./Blog.css";
import { IoDocumentTextSharp } from "react-icons/io5";
import blogimg from "../../assets/blogimg.jpg";

const Blog = () => {
  return (
    <div>
      <div className="container-fluid blog-page">
        <div className="container">
          <div className="row">
            <div className="blog-badge" data-aos="fade-up">
              <IoDocumentTextSharp className="blog-icon" />
              <span>BLOG</span>
            </div>
            <h2 className="blog-heading" data-aos="fade-up">
              Our Latest News
            </h2>
            <div className="col-12 col-md-6 col-lg-6">
              <img
                src={blogimg}
                alt="Cup of coffee"
                className="img-fluid blog-img"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <h2 className="btop-hea">
                Top 10 Romantic Hangout Places You Must Visit
              </h2>
              <p className="blog-para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia in quae, ex eaque excepturi molestias sed non aliquid
                facere, porro rerum! Laborum quod, velit distinctio
                exercitationem dolorem voluptatum dicta non.
              </p>
              <button className="rad-art">READ ARTICLES</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
