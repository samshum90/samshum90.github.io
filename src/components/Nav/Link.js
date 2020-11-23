import React from "react";
import { Link as ScrollLink } from "react-scroll";

import {
  SCROLL_DELAY,
  SCROLL_DURATION,
  SCROLL_OFFSET,
} from "../../scrollconfig";

const Link = ({ name, navName, index }) => (
  <ScrollLink
    className="nav__list-item"
    activeClass="nav__list-item--active"
    delay={SCROLL_DELAY}
    duration={SCROLL_DURATION + 150 * index}
    offset={SCROLL_OFFSET}
    role="menuitem"
    to={name}
    smooth
    spy
  >
    {navName}
  </ScrollLink>
);

export default Link;
