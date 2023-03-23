import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import CharacterItem from "./CharacterItem";
import "../App.css";

const CharacterList = observer(() => {
  const { character } = useContext(Context);

  // 
    const sortData=[...character.character].sort((a,b)=>{
      // console.log(a.name>b.name ? 1:-1)
      return a.name>b.name ? 1:-1
    })
    // console.log(sortData)
  // 
  return (
    <Row className="d-flex">
      {sortData.map((character) => (
        
        <CharacterItem key={character.id} character={character} />

      ))}
      <button>a-z</button>
    </Row>
  );
});

export default CharacterList;
