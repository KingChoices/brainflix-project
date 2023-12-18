import React from "react";
import { Link, Routes } from "react-router-dom";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./searchbar.scss";
import searchlogo from "../../assets/images/icons/search.svg";
import Upload from "../../pages/Upload/Upload.js";

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
          <div className="searchbar__container--mobile--layout">
            <div className="searchbar__container--input">
              <input type="text" name="search" placeholder="Search" />
            </div>
            <div className="searchbar__container--avatar desktop--hidden">
              <img src={avatar} alt="searchbar avatar" />
            </div>
          </div>

          <div className="searchbar__container--button">
            <Link path="/upload" element={<Upload />}>
              <button>UPLOAD</button>
            </Link>
          </div>
          <div className="searchbar__container--avatar mobile--hidden">
            <img src={avatar} alt="searchbar avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
