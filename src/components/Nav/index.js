import React from "react";
import PropTypes from "prop-types";

import RightNav from "./RightNav";
import Link from "./link";
import "./nav.scss";

const Nav = ({ sections, setIsNavOpen, isNavOpen }) => {
  return (
    <nav className="nav">
      <div className="nav__title">
        <span className="nav__title-text">Samuel Shum</span>
      </div>

      <div className="burger__wrapper" onClick={() => setIsNavOpen(!isNavOpen)}>
        <div
          className={`burger ${
            isNavOpen ? "open" : ""
          } burger-arrow burger-right`}
        >
          <div className="burger-lines"></div>
        </div>
      </div>

      <div className="nav__bar">
        {sections.map(({ name, navName }, index) => (
          <Link
            name={name}
            navName={navName}
            index={index}
            key={name}
            role="none"
            isNavOpen={isNavOpen}
          >
            {navName}
          </Link>
        ))}
      </div>
      <RightNav
        sections={sections}
        setIsNavOpen={setIsNavOpen}
        isNavOpen={isNavOpen}
      />
    </nav>
  );
};

Nav.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      navName: PropTypes.string.isRequired,
    })
  ).isRequired,
  isNavOpen: PropTypes.bool.isRequired,
  setIsNavOpen: PropTypes.func.isRequired,
};

export default Nav;
