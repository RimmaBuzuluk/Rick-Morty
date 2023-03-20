import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import CharacterItem from "./CharacterItem";
import "../App.css";

const CharacterList = observer(() => {
  const { character } = useContext(Context);
  console.log(character);

  return (
    <Row className="d-flex">
      {character.character.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </Row>
  );
});

export default CharacterList;
