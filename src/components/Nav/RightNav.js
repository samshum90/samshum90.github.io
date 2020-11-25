import React from "react";
import PropTypes from "prop-types";

import Link from "./Link";
import "./nav.scss";

const RightNav = ({ sections, setIsNavOpen, isNavOpen }) => {
  return (
    <ul
      className={`nav__list ${isNavOpen ? "nav__list--active" : ""}`}
      id="navigation"
      role="menu"
    >
      {sections.map(({ name, navName }, index) => (
        <li key={name} role="none">
          <Link
            handleClick={() => setIsNavOpen(!isNavOpen)}
            index={index}
            isNavOpen={isNavOpen}
            name={name}
            navName={navName}
          >
            {navName}
          </Link>
        </li>
      ))}
    </ul>
  );
};

RightNav.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      navName: PropTypes.string.isRequired,
    })
  ).isRequired,
  isNavOpen: PropTypes.bool.isRequired,
  setIsNavOpen: PropTypes.func.isRequired,
};

export default RightNav;
