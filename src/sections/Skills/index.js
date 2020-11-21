import React from "react";

import skillsList from "./skillsList";
import "./skills.scss";

const Skills = () => {
  return (
    <>
      {skillsList.map(({ skills, title }) => (
        <article className="skills-wrapper" key={title}>
          <h4 className="skills__title">{title}</h4>
          <ul className="skills__list">
            {skills.map(({ name, icon }) => (
              <li key={name} className="skills__list-item">
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
