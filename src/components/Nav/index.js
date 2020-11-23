import React from "react";
import Link from "./Link";
import PropTypes from "prop-types";

import "./nav.scss";

const Nav = ({ sections }) => {
  return (
    <nav className="nav">
      <div className="nav__title">
        <span className="nav__title-text">Samuel Shum</span>
      </div>

      <div className="nav__list">
        {sections.map(({ name, navName }, index) => (
          <Link
            name={name}
            navName={navName}
            index={index}
            key={name}
            role="none"
          >
            {navName}
          </Link>
        ))}
      </div>
    </nav>
  );
};

Nav.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default Nav;
