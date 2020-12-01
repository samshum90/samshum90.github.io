import React, { useState } from "react";

import { Home, Blog } from "./containers";
import { Footer, Content } from "./components";
import { About, Header, Projects, Skills } from "./sections";
import { HashRouter, Route, Link } from "react-router-dom";

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
  { name: "about", Component: About, title: "About me", navName: "About" },
];

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <HashRouter basename="/">
        <Route
          exact
          path="/"
          component={() => (
            <Home
              sections={sections}
              setIsNavOpen={setIsNavOpen}
              isNavOpen={isNavOpen}
            />
          )}
        />
        <Route path="/blog" component={() => <Blog />} />
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
