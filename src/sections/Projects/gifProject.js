import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { github, globe, devpost } from "../../assets";
import "./projects.scss";

const GifProject = ({ project }) => {
  const [featuresList, setFeaturesList] = useState([]);
  const nodeRef = React.useRef(null);
  const { features, gif, urls, tech } = project;

  useEffect(() => {
    initializeFeatures();
    return () => {
      setFeaturesList([]);
    };
  }, []);

  function initializeFeatures() {
    let i = 0;
    if (features.length === featuresList.length) {
      return;
    }

    function insertFeature() {
      setTimeout(function () {
        const newFeature = features[i];
        setFeaturesList((featuresList) => featuresList.concat(newFeature));
        i++;
        if (i < features.length) {
          insertFeature();
        }
      }, 500);
    }
    if (i < features.length) {
      insertFeature();
    }
  }

  return (
    <>
      <div className="project__image-wrapper">
        <img className="project__gif" src={gif.src} alt={gif.alt} />
      </div>
      <div className="project__details">
        <h3 className="project__title">features:</h3>
        <TransitionGroup className="project__list" component="ul">
          {featuresList.map((feature, index) => (
            <CSSTransition
              key={index}
              nodeRef={nodeRef}
              timeout={500}
              classNames="slide__in"
            >
              <li ref={nodeRef} className="project__list-item">
                {feature}
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
        <div className="project__tech">
          <p>Tech:</p>
          {tech.map(({ src, alt }) => {
            if (alt === "CSS/SCSS" || alt === "HTML" || alt === "Javascript") {
              return null;
            } else {
              return (
                <img
                  alt={alt}
                  className="project__tech-item"
                  key={src}
                  src={src}
                />
              );
            }
          })}
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
