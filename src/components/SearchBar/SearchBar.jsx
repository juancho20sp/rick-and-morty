import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="searchbar">
      <input
        className="input"
        type="text"
        placeholder="¿A quién quieres buscar?"
        onChange={props.onChange}
        value={props.query}
      />
      <button className="button">Buscar</button>
    </div>
  );
};

export default SearchBar;
