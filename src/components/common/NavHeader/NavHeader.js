import React from "react";
import { Link } from "@reach/router";
import "./nav-styles.scss";

const NavHeader = () => {
  return (
    <nav className="nav-header">
      <Link to="/">Home</Link>
      <Link to="giphy">Giphy</Link>
      <Link to="git-repos">Git Repos</Link>
    </nav>
  );
};

export default NavHeader;
