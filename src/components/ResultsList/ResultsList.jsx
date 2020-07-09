import React, { useState, useMemo } from "react";

import "./ResultsList.css";

import CharacterCard from "../CharacterCard/CharacterCard";
import ErrorOnSearch from "../ErrorOnSearch/ErrorOnSearch";

function useSearchCharacter(characters, query) {
  // Creamos el hook
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  // Filtramos
  useMemo(() => {
    const result = characters.filter((char) => {
      return char.name.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredCharacters(result);
  }, [characters, query]);

  return { filteredCharacters };
}

const ResultsList = (props) => {
  const { filteredCharacters } = useSearchCharacter(
    props.characters,
    props.query
  );

  if (filteredCharacters.length === 0) {
    return <ErrorOnSearch clearQuery={props.clearQuery}></ErrorOnSearch>;
  }

  return (
    <div className="results__container">
      {filteredCharacters.map((char) => {
        return <CharacterCard info={char} key={char.id}></CharacterCard>;
      })}
    </div>
  );
};

export default ResultsList;
