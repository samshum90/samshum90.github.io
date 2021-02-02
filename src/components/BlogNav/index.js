import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./blogNav.scss";

const BlogNav = ({ setIsNavOpen, isNavOpen }) => {
  return (
    <nav className="blogNav">
      <div className="blogNav__title">
        <Link to="" className="blogNav__title-text">
          Samuel Shum
        </Link>
      </div>

      <div className="blogNav__bar">
        <Link to="" className="blogNav__bar-link">
          Work
        </Link>
      </div>
    </nav>
  );
};

BlogNav.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  setIsNavOpen: PropTypes.func.isRequired,
};

export default BlogNav;
