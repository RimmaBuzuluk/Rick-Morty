import React, { useContext, useState } from "react";
import { Context } from "../index";
import CharacterList from "./CharacterList";
import Img_Serch from "./Vector.png";

function Search() {
  const { character } = useContext(Context);

  const [searchCharactr, setSearchCharacter]=useState("")


  const handleSearch=(event)=>{
    setSearchCharacter(event.target.value)
  }



  // const filterInputCharacter=character.filter((item)=>
  // item.name.toLowerCase().includes(searchCharactr.toLowerCase())
  // )


  return(
  <div> 
    <div   className="serch_border">
    <img className="img-search" src={Img_Serch} alt="My Image" />
      <input 
        type="text"
        placeholder="Filter by name..."
        value={searchCharactr}
        onChange={handleSearch}
      />
  </div>
<CharacterList  characterName={character}/>
</div>)
}

export default Search;
