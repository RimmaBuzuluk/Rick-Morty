import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const CharacterItem =({ character }) => {

  return (
    <Col md={3} className="mt-3">
      <Link to={`/character/${character.id}`} >
        <Card className="mx-auto d-block bshadow" style={{ width: 200, cursor: "pointer" }} border="light">
          <Image width={200} height={150} src={character.img} alt={character.name} />
          <div className="BlockNamePerson">
            <div className="nameC">{character.name}</div>
            <div className="nameP">{character.person}</div>
          </div>
        </Card>
      </Link>
    </Col>
  );
};

export default CharacterItem;
