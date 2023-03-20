import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Col, Image, Row } from "react-bootstrap";
import "../App.css";
import { PAGE } from "../utils/consts";
import { useNavigate } from "react-router-dom";

const CharacterItem = ({ character }) => {
  const navigate = useNavigate();
  return (
    <Col
      md={3}
      className={"mt-3 "}
      onClick={() => navigate(PAGE + "/" + character.id)}
    >
      <Card
        className="mx-auto d-block bshadow"
        style={{ width: 200, cursor: "pointer" }}
        border={"light"}
      >
        <Image width={200} height={150} src={character.img} />
        <div>{character.name}</div>
        <div>{character.person}</div>
      </Card>
    </Col>
  );
};

export default CharacterItem;
