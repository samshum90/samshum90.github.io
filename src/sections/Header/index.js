import React from "react";
import PropTypes from "prop-types";

import "./header.scss";

const Header = ({ id }) => {
  return (
    <header className="header" id={id}>
      <div className="banner-wrapper">
        <section className="banner">
          <h1 className="banner__title">
            Full Stack Developer
            <span className="banner__title-developer">Samuel Shum</span>
          </h1>
        </section>
      </div>
    </header>
  );
};

Header.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Header;
