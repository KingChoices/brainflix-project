import React from "react";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./searchbar.scss";

const SearchBar = () => {
  return (
    <nav className="searchbar__container">
      <div className="searchbar__container--grid">
        <div className="searchbar__container--one">
          <div className="searchbar__container--logo">
            <img src={logo} alt="searchbar logo" />
          </div>
        </div>
        <div className="searchbar__container--two">
          <div className="searchbar__container--input">
            <input type="text" name="search" placeholder="Search" />
          </div>
          <div className="searchbar__container--button">
            <button>UPLOAD</button>
          </div>
          <div className="searchbar__container--avatar">
            <img src={avatar} alt="searchbar avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
