import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import PagesDrop from "../PagesDropdown/PagesDrop";

const Navbar = (props) => {
  const location = useLocation();
  const activeId = location.pathname;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container-fluid nav-con">
      <nav className="navbar navbar-expand-lg pt-4 pb-3">
        <div className="container na">
          {/* Hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Collapsing menu */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {props.menuItems.map((item, index) => (
                <li
                  key={index}
                  className="nav-item position-relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {item.dropdown ? (
                    // If item has dropdown, don't use Link

                    <Link
                      to="#"
                      className={`nav-link ${
                        activeId === item.link ? "active" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    // Normal clickable link
                    <Link
                      className={`nav-link ${
                        activeId === item.link ? "active" : ""
                      }`}
                      to={item.link}
                    >
                      {item.label}
                    </Link>
                  )}
                  {/* Dropdown handling */}
                  {item.dropdown && hoveredIndex === index && (
                    <PagesDrop items={item.dropdown} />
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Logo */}
          <Link className="navbar-brand mx-auto" to="/">
            <img src={props.brandLogo} className="img-fluid logo" alt="Logo" />
          </Link>
          {/* Icons */}
          <div className="d-flex gap-md-4 social-icons">
            {props.socialIcons.map((item, index) => (
              <div className="position-relative d-inline-block" key={index}>
                <a
                  className="icon fs-4 d-inline-block position-relative"
                  href="#"
                >
                  {item.icon}
                  {/* Badge */}
                  {item.badge !== undefined && (
                    <span className="position-absolute top-0 start-100 translate-middle rounded-circle my-badge">
                      {item.badge}
                    </span>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
