import React, { useState } from "react";
import PropTypes from "prop-types";

import ImgProject from "./imgProject";
import GifProject from "./gifProject";

const Project = ({ project }) => {
  const [hover, setHover] = useState(false);
  return (
    <article
      className="project"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {hover ? (
        <GifProject project={project} />
      ) : (
        <ImgProject project={project} />
      )}
    </article>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    urls: PropTypes.shape({
      github: PropTypes.string.isRequired,
      live: PropTypes.string,
      dev: PropTypes.string,
    }).isRequired,
    tech: PropTypes.arrayOf(
      PropTypes.shape({
        alt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Project;
