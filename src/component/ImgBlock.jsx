// import "../App.css";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../index";
import img from "../component/_image_.png";
import pic from "../component/_image_.png";

const ImgBlock = observer(() => {
  // const [character, setCharacter] = useState({ info: [] });

  // const { id } = useParams(); //id page
  // console.log(id);

  // useEffect(() => {
  //   fetchOneCharacter(id).then((data) => setCharacter(data));
  // }, []);

  const mainCharacter = {
    name: "Rick Sanchez",
    gender: "Male",
    status: "specie",
    origin: "Eath(c-137)",
    type: "unknown",
    img: pic,
  };

  return (
    <div>
      <Image className="mainPic" src={mainCharacter.img} />
      <div className="nameSanchez">{mainCharacter.name}</div>
      <div className="information">information</div>
      <div className="block">
        <div className="block_inf">
          <div>Gender</div>
          <div>{mainCharacter.gender}</div>
          <hr />
        </div>
        <div className="block_inf">
          <div>Gender</div>
          <div>{mainCharacter.gender}</div>
          <hr />
        </div>
        <div className="block_inf">
          <div>Gender</div>
          <div>{mainCharacter.gender}</div>
          <hr />
        </div>
        <div className="block_inf">
          <div>Gender</div>
          <div>{mainCharacter.gender}</div>
          <hr />
        </div>
        <div className="block_inf">
          <div>Gender</div>
          <div>{mainCharacter.gender}</div>
          <hr />
        </div>
      </div>
    </div>
  );
});

export default ImgBlock;
