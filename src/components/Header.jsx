import React, { useContext } from "react";
import ToogleTheme from "./ToogleTheme";
import { Link } from "react-router";
import { Theme } from "../pages/Home";
function Header() {
  const toogleTheme = useContext(Theme);
  return (
    <header>
      <nav>
        <Link to="/">Cookie</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
