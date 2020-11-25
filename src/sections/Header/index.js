import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import "./header.scss";

const Header = ({ id }) => {
  const [display, setDisplay] = useState(false);
  const nodeRef = React.useRef(null);
  const nodeRef2 = React.useRef(null);

  useEffect(() => {
    setTimeout(() => setDisplay(true), 100);
  }, []);

  return (
    <header className="header" id={id}>
      <div className="banner-wrapper">
        <section className="banner">
          <CSSTransition
            nodeRef={nodeRef}
            in={display}
            timeout={1000}
            unmountOnExit
            classNames="slide__down"
          >
            <h1 ref={nodeRef} className="banner__title">
              Full Stack Developer
            </h1>
          </CSSTransition>
          <CSSTransition
            nodeRef={nodeRef2}
            in={display}
            timeout={1000}
            unmountOnExit
            classNames="slide__in"
          >
            <span ref={nodeRef2} className="banner__title-developer">
              Samuel Shum
            </span>
          </CSSTransition>
        </section>
      </div>
    </header>
  );
};

Header.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Header;
