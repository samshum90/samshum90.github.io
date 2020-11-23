import React from "react";
import Link from "./Link";

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

export default Nav;
