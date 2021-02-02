import React, { useState } from "react";

import { Home, Blog } from "./containers";
import { Footer } from "./components";
import { HashRouter, Route } from "react-router-dom";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <HashRouter basename="/">
        <Route
          exact
          path="/"
          component={() => (
            <Home setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
          )}
        />
        <Route
          path="/blog"
          component={() => (
            <Blog setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
          )}
        />
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
