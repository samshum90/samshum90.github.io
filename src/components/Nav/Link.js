import React from "react";
import PropTypes from "prop-types";
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

Link.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Link;
