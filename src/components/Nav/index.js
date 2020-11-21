import React from "react";
import Link from "./Link";

import "./nav.scss"

const Nav = ({sections}) => {
    return (
        <nav className="nav">
      <div className="nav__title">
        <span className="nav__title-text">Samuel Shum</span>
      </div>

            <ul
            className="nav__list"
            >
        {sections.map(({ name, navName }, index) => (
            <li
                key={name}
                role="none"
                className="nav__list-item"
            >
                <Link
                    name={name}
                    navName={navName}
                    index={index}
                >
                {navName}
            </Link>
          </li>
        ))}
            </ul>
        </nav>
    )
}

export default Nav;