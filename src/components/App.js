import React from "react";
import { Router } from "@reach/router";
import NavHeader from "./common/NavHeader/NavHeader";
import Giphy from "./Giphy/Giphy";
import GitRepos from "./GitRepos/GitRepos";

const App = () => {
  return (
    <main>
      <NavHeader />
      <Router>
        <Giphy path="/giphy" />
        <GitRepos path="/git-repos" />
      </Router>
    </main>
  );
};

export default App;
