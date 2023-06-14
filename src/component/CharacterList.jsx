import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import CharacterItem from "./CharacterItem";
import "../App.css";

const CharacterList = observer((props) => {
  const  character =props.characterName;

 
    const sortData=[...character.character].sort((a,b)=>{
      // console.log(a.name>b.name ? 1:-1)
      return a.name>b.name ? 1:-1
    })
    
  return (
    <Row >
      {sortData.map((character) => (
        
        <CharacterItem key={character.id} character={character} />

      ))}
      
    </Row>
  );
});

export default CharacterList;
