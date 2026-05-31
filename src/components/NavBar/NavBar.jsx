import React from "react";
import Menu from "./Menu";
import LogoSearch from "./LogoSearch";
import UserCart from "./UserCart";
import "../../styles/NavBar.css";

const NavBar = () => {
  return (
    <header>
      <nav className="d-flex justify-content-between align-items-center px-3 py-2">
        <Menu />
        <LogoSearch />
        <UserCart />
      </nav>
    </header>
  );
};

export default NavBar;
