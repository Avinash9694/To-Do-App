import React from "react";
import logo from "../assests/logo.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>Todo App</span>
      </div>
      <div className="themeSelector">
        <span className="light"></span>
        <span className="medium"></span>
        <span className="dark"></span>
        <span className="gradientOne"></span>
        <span className="gradientTwo"></span>
        <span className="gradientThree"></span>
      </div>
    </header>
  );
};

export default Header;
