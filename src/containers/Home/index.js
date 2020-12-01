import React, { useState } from "react";

import { Nav, Section, Content } from "../../components";
import { Header } from "../../sections";

const Home = ({ sections, isNavOpen, setIsNavOpen }) => {
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

export default Home;
