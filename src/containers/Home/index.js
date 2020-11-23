import React from "react";

import { Section } from "../../components";
import { Header } from "../../sections";

const Home = ({ sections }) => {
  return (
    <>
      <Header id="home" />
      <main>
        {sections.map(({ Component, name, title }) => {
          return (
            name !== "home" && (
              <Section id={name} title={title} key={name}>
                <Component />
              </Section>
            )
          );
        })}
      </main>
    </>
  );
};

export default Home;
