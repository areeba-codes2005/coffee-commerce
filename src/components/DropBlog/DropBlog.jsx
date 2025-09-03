import React from "react";
import "./DropBlog.css";

const DropBlog = ({ leftdata, rightdata }) => {
  return (
    <div className="container droblog-cont">
      <div className="row">
        <div className="col-12 col-md-8 blog-left">
          {leftdata.map((leftItem, index) => (
            <div key={index}>
              <img
                src={leftItem.image}
                className="img-fluid lef-col-img"
                alt=""
              />
              <h4>{leftItem.post_title}</h4>
              <span>{leftItem.post_date}</span>
              <p>{leftItem.post_text}</p>
            </div>
          ))}
        </div>

        <div className="col-12 col-md-4 blog-right">
          <div className="sticky-top">
            <h4 className="recent-hea">Recent Posts</h4>
            {rightdata.map((rightItem, index) => (
              <div className="d-flex" key={index}>
                <div className="mt-4 me-3">
                  <img
                    src={rightItem.image}
                    className="img-fluid rig-col-img"
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <h4 className="subtitle">{rightItem.post_subtitle}</h4>
                  <span>{rightItem.post_date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropBlog;
