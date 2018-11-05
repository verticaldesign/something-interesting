import React from "react";
import { Router } from "@reach/router";
import NavHeader from "./common/NavHeader/NavHeader";
import Giphy from "./Giphy/Giphy";
import GitRepos from "./GitRepos/GitRepos";
import Home from "./Home/Home";
import "./app-styles.scss";

const App = () => {
  return (
    <main>
      <NavHeader />
      <Router>
        <Home path="/" />
        <Giphy path="/giphy" />
        <GitRepos path="/git-repos" />
      </Router>
    </main>
  );
};

export default App;
