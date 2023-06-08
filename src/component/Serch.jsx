import React, { useContext, useState } from "react";
import { Context } from "../index";

function Search() {
  const { character } = useContext(Context);

  const [searchTerm, setSearchTerm] = useState('');//serchTerm зберігає значення поточного запросу
  // const [matchingCharacters, setMatchingCharacters] = useState([]);

  //сортування за алфавітом
  const sortData=[...character.character].sort((a,b)=>{
    return a.name>b.name ? 1:-1
  })
  // console.log(sortData)


//сортування за пошуком

const handleInputChange = (event) => {
  setSearchTerm(event.target.value);
};

// console.log(handleInputChange)
// console.log(character)

const filteredData=sortData.filter(item => item.name.startsWith(searchTerm))
console.log(filteredData)


  return <input
  type="text"
  placeholder="Filter by name..."
  onChange={handleInputChange}
/>;
}

export default Search;
