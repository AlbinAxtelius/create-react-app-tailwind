import React from "react";
import { Router } from "@reach/router";
import Home from "./screens/Home";
import About from "./screens/About";
import Main from "./screens/Main";

const App: React.FC = () => {
  return (
    <Router className="flex-1">
      <Main path="/">
        <Home path="/" />
        <About path="/about" />
      </Main>
    </Router>
  );
};

export default App;
