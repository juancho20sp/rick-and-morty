import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

import MyButton from "../MyButton/MyButton";

const NotFound = (props) => {
  return (
    <div className="container">
      <h3 className="title">Ups! No encontramos lo que buscabas :c</h3>
      <p>Prueba modificando tus filtros de búsqueda!</p>
      <div className="container__button">
        <Link to="/">
          <MyButton>Volver a inicio</MyButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
