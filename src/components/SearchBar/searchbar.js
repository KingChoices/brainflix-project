import React from "react";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";

const SearchBar = () => {
  return (
    <nav>
      <img src={logo} alt="the logo" />
      <input type="text" name="search" />
    </nav>
  );
};

export default SearchBar;
