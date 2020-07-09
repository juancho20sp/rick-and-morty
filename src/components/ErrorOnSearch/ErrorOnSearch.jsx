import React from "react";

import "./ErrorOnSearch.css";

import MyButton from "../MyButton/MyButton";

const ErrorOnSearch = (props) => {
  return (
    <div className="error__container">
      <p className="first">Parece que no encontramos lo que buscabas...</p>
      <p className="second">¿Y si lo intentas nuevamente?</p>
      <p className="third">
        Vuelve a escribir el nombre del personaje que buscas o simplemente
        vuelve al inicio :D
      </p>

      <div className="error__link">
        <MyButton function={props.clearQuery}>Volver al inicio</MyButton>
      </div>
    </div>
  );
};

export default ErrorOnSearch;
