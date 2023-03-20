import "../App.css";
import Block_info from "../component/Block_info";
import Img from "../component/Img";
import React from "react";
import CharacterList from "../component/CharacterList";

function MainBlock() {
  return (
    <div>
      <Img />
      <Block_info />
      <CharacterList />
    </div>
  );
}

export default MainBlock;
