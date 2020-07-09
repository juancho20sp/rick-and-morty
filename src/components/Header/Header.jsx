import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import imgUrl from "../../assets/logo.svg";

const Header = (props) => {
  return (
    <div className="header__container">
      <Link to="/" className="header__image">
        <div className="header__image">
          <img src={imgUrl} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
