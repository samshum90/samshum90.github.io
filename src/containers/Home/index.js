import React, { useState } from "react";
import PropTypes from "prop-types";

import { Nav, Section, Content } from "../../components";
import { About, Header, Projects, Skills } from "../../sections";

const sections = [
  { name: "home", Component: Header, title: "Home", navName: "Home" },
  {
    name: "skills",
    Component: Skills,
    title: "Tech I know",
    navName: "Tech",
  },
  {
    name: "projects",
    Component: Projects,
    title: "Projects",
    navName: "Projects",
  },
  {
    name: "about",
    Component: About,
    title: "About me",
    navName: "About",
  },
];

const Home = ({ isNavOpen, setIsNavOpen }) => {
  const [filterBy, setFilterBy] = useState("");

  return (
    <>
      <Nav
        sections={sections}
        setIsNavOpen={setIsNavOpen}
        isNavOpen={isNavOpen}
      />
      <Content isNavOpen={isNavOpen}>
        <Header id="home" />
        <main>
          {sections.map(({ Component, name, title }) => {
            return (
              name !== "home" && (
                <Section id={name} title={title} key={name}>
                  <Component filterBy={filterBy} setFilterBy={setFilterBy} />
                </Section>
              )
            );
          })}
        </main>
      </Content>
    </>
  );
};

Home.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  setIsNavOpen: PropTypes.func.isRequired,
};

export default Home;
