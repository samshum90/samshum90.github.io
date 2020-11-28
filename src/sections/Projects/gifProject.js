import React from "react";
import PropTypes from "prop-types";

import { github, globe, devpost } from "../../assets";

const GifProject = ({ project }) => {
  const { title, features, gif, urls, tech } = project;
  return (
    <>
      <div className="project__image-wrapper">
        <img className="project__gif" src={gif.src} alt={gif.alt} />
      </div>
      <div className="project__details">
        <h3 className="project__title">{title} features:</h3>
        <ul className="project__list">
          {features.map((feature) => (
            <li className="project__list-item">{feature}</li>
          ))}
        </ul>
        <div className="project__tech">
          <p>Tech:</p>
          {tech.map(({ src, alt }) => (
            <img alt={alt} className="project__tech-item" key={src} src={src} />
          ))}
        </div>
        <div className="project__links-wrapper">
          <a className="project__link" href={urls.github}>
            <img alt="Github" className="project__link-icon" src={github} />
            Code
          </a>
          {urls.live && (
            <a className="project__link" href={urls.live}>
              <img alt="Live" className="project__link-icon" src={globe} />
              Live
            </a>
          )}
          {urls.dev && (
            <a className="project__link" href={urls.dev}>
              <img alt="Devpost" className="project__link-icon" src={devpost} />
              Devpost
            </a>
          )}
        </div>
      </div>
    </>
  );
};

GifProject.propTypes = {
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

export default GifProject;
