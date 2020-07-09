import React from "react";
import { Link } from "react-router-dom";
import "./CharacterCard.css";

const CharacterCard = (props) => {
  const char = props.info;

  return (
    <Link to={`/characters/${char.id}`}>
      <div className="card__container">
        <div className="card__image">
          <img src={char.image} alt={`${char.name}`} />
        </div>

        <p className="char-name">{char.name}</p>
        <p className="char-origin">{char.origin.name}</p>
        <p className="char-status">{char.status}</p>
      </div>
    </Link>
  );
};

export default CharacterCard;
