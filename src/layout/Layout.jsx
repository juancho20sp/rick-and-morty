import React from "react";
import "./Layout.css";
import Header from "../components/Header/Header";

const Layout = (props) => {
  return (
    <div className="layout__container">
      <Header></Header>
      {props.children}
    </div>
  );
};

export default Layout;
