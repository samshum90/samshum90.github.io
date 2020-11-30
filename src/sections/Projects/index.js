import React, { useState, useEffect } from "react";

import Project from "./project";
import projectList from "./projectList";
import "./projects.scss";

const Projects = ({ filterBy, setFilterBy }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    filterProjectList();
  }, [filterBy]);

  function filterProjectList() {
    if (
      !filterBy ||
      filterBy === "XD" ||
      filterBy === "InDesign" ||
      filterBy === "Illustrator" ||
      filterBy === "Lightroom" ||
      filterBy === "Photoshop"
    ) {
      setProjects(projectList);
      setFilterBy("");
    } else {
      const filteredProjects = projectList.filter((project) =>
        project.tech.find((tech) => tech.alt === filterBy)
      );
      setProjects(filteredProjects);
    }
  }
  return (
    <>
      {filterBy && (
        <div className="project__filter-wrapper">
          <h4 className="project__filter-title"> Filtered by: {filterBy} </h4>
          <button
            className="project__filter-button"
            type="button"
            onClick={() => setFilterBy("")}
          >
            clear
          </button>
        </div>
      )}
      {projects.map((project) => (
        <Project project={project} key={project.title} />
      ))}
    </>
  );
};

export default Projects;
