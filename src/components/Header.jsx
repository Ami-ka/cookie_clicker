import React, { useContext } from "react";
import { Link } from "react-router";
import { Theme } from "../App";

function Header() {
  const { theme } = useContext(Theme);

  return (
    <header class={"header" + theme}>
      <nav>
        <Link to="/">Cookie</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
