import React from "react";
import logo from "../../assets/logo.svg";
import S from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={S.container}>
        <img src={logo} alt="logo constructor" />
        <h1>Material Calculator</h1>
      </div>
    </header>
  );
};

export default Header;
