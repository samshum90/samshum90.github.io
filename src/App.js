import React, { useState } from "react";

import { Nav, Footer, Content, Section } from "./components";
import { About, Header, Projects, Skills } from "./sections";

const sections = [
  { name: "home", Component: Header, title: "Home", navName: "Home" },
  { name: "skills", Component: Skills, title: "Tech I know", navName: "Tech" },
  {
    name: "projects",
    Component: Projects,
    title: "Projects",
    navName: "Projects",
  },
  { name: "about", Component: About, title: "About me", navName: "About" },
];

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
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
                  <Component />
                </Section>
              )
            );
          })}
        </main>
      </Content>
      <Footer />
    </>
  );
}

export default App;
