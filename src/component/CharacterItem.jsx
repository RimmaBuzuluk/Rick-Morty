import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Col, Image, Row } from "react-bootstrap";
import "../App.css";

const CharacterItem = ({ character }) => {
  return (
    <Col md={3} className={"mt-3 "}>
      <Card
        className="mx-auto d-block"
        style={{ width: 150, cursor: "pointer" }}
        border={"light"}
      >
        <Image width={150} height={150} src={character.img} />
        <div>{character.name}</div>
      </Card>
    </Col>
  );
};

export default CharacterItem;
