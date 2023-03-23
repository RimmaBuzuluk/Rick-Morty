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
    specie:"human",
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
          <div className="MainN">Gender</div>
          <div className="ingChar">{mainCharacter.gender}</div>
          <hr />
        </div>
        <div className="block_inf">
          <div className="MainN">Status</div>
          <div className="ingChar">{mainCharacter.status}</div>
          <hr />
        </div>
        <div className="block_inf">
          <div className="MainN">Specie</div>
          <div className="ingChar" >{mainCharacter.specie}</div>
          <hr />
        </div>
        <div className="block_inf">
          <div className="MainN">Origin</div>
          <div className="ingChar">{mainCharacter.origin}</div>
          <hr />
        </div>
        <div className="block_inf">
          <div className="MainN">Type</div>
          <div className="ingChar">{mainCharacter.type}</div>
          <hr />
        </div>
      </div>
    </div>
  );
});

export default ImgBlock;
