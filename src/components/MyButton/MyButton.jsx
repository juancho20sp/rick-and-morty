import React from "react";
import "./MyButton.css";

const Button = (props) => {
  return (
    <div className="button__container" onClick={props.function}>
      {props.children}
    </div>
  );
};

export default Button;
