import React from "react";

import Project from "./project";
import projectList from "./projectList";
import "./projects.scss";

const Projects = () => {
  return (
    <>
      {projectList.map((project) => (
        <Project project={project} key={project.title} />
      ))}
    </>
  );
};

export default Projects;
