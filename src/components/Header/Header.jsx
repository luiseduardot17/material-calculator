import React from "react";
import logo from "../../assets/logo.svg";
import S from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={S.container}>
        <img src={logo} alt="logo constructor" />
        <div className={S.title}>
        <h1>MATERIAL CALCULATOR</h1>
        <h2>A aplicação que te ajuda a calcular o material para a sua construção.</h2>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
