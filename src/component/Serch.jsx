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
console.log("charactor",[...character.character])

 


  const filterInputCharacter=[...character.character].filter((item)=>
  item.name.toLowerCase().includes(searchCharactr.toLowerCase())
  )


  console.log("filter",filterInputCharacter)
  

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
<CharacterList  characterName={filterInputCharacter}/>
</div>)
}

export default Search;