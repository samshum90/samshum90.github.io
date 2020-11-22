import React from "react";

import { Nav, Footer } from "./components";
import { Home } from "./containers";
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
  return (
    <>
      <Nav sections={sections} />
      <Home sections={sections} />
      <Footer />
    </>
  );
}

export default App;
