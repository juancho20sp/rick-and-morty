import React from "react";
import GridLoader from "react-spinners/GridLoader";

import "./Loader.css";

const Loader = (props) => {
  return (
    <div className="loader__container">
      <GridLoader
        loading={props.loading}
        color={"#d7df62"}
        size={50}
      ></GridLoader>
    </div>
  );
};

export default Loader;
