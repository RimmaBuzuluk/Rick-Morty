import React, { useContext, useState } from "react";
import { Context } from "../index";

function Search() {
  const { character } = useContext(Context);

  const [searchTerm, setSearchTerm] = useState('');
  const [matchingCharacters, setMatchingCharacters] = useState([]);

  const sortData=[...character.character].sort((a,b)=>{
    return a.name>b.name ? 1:-1
  })

  console.log(sortData)

  
//   const handleSearchChange = (event) => {

//     const search = event.target.value.toLowerCase();//отримуемо [елементи
//     // const matching = character.character.filter((character) => character.toLowerCase().includes(search));
//     const NewDataSerch=[]
//     for(let i=0;i<sortData.length;i++){
//       const matching=sortData[i].name
//       NewDataSerch.push(matching)
//       // console.log(matching)
//     }
//     console.log(NewDataSerch)
// //     const matching=sortData[1].name
// // console.log(matching)
//     // setMatchingCharacters(matching.sort());
//     // setSearchTerm(search);
//   };


  // console.log(characters)
  return <input type="text"  placeholder="Filter by name..." />;
}

export default Search;
