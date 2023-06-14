import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Row } from "react-bootstrap";
import CharacterItem from "./CharacterItem";
import "../App.css";

const CharacterList = observer((props) => {
  const  character =props.characterName;

  character.sort((a, b) => a.name.localeCompare(b.name));
    
  return (
    <Row >
      {character.map((character) => (
        
        <CharacterItem key={character.id} character={character} />

      ))}
      
    </Row>
  );
});

export default CharacterList;