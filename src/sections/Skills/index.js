import React from "react";
import { scroller } from "react-scroll";

import skillsList from "./skillsList";
import { SCROLL_DURATION, SCROLL_OFFSET } from "../../scrollconfig";
import "./skills.scss";

const Skills = ({ setFilterBy }) => {
  function handleSkillClick(name) {
    setFilterBy(name);
    scroller.scrollTo("projects", {
      duration: SCROLL_DURATION,
      offset: SCROLL_OFFSET,
      smooth: true,
    });
  }
  return (
    <>
      {skillsList.map(({ skills, title }) => (
        <article className="skills-wrapper" key={title}>
          <h4 className="skills__title">{title}</h4>
          <ul className="skills__list">
            {skills.map(({ name, icon }) => (
              <li
                key={name}
                className="skills__list-item"
                onClick={() => handleSkillClick(`${name}`)}
              >
                <img className="skills__icon" src={icon} alt={name} />
                <span className="skills__name">{name}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
};

export default Skills;
