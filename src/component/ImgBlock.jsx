import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import CharacterStore from "../store/CharacterStore";
import { Image } from "react-bootstrap";

const ImgBlock = observer(() => {
  const { id } = useParams();
  const characterStore = new CharacterStore();
  const selectedCharacter = characterStore.character.find((person) => person.id === parseInt(id));;
  console.log(selectedCharacter)

  return (
//     <div>
//  <p>hello</p>
//  <h1>{selectedCharacter.name}</h1>
//     </div>
<div>
<Image className="mainPic" src={selectedCharacter.img} />
<div className="nameSanchez">{selectedCharacter.name}</div>
<div className="information">information</div>
<div className="block">
  <div className="block_inf">
    <div className="MainN">Gender</div>
    <div className="ingChar">{selectedCharacter.gender}</div>
    <hr />
  </div>
  <div className="block_inf">
    <div className="MainN">Status</div>
    <div className="ingChar">{selectedCharacter.status}</div>
    <hr />
  </div>
  <div className="block_inf">
    <div className="MainN">Specie</div>
    <div className="ingChar" >{selectedCharacter.specie}</div>
    <hr />
  </div>
  <div className="block_inf">
    <div className="MainN">Origin</div>
    <div className="ingChar">{selectedCharacter.origin}</div>
    <hr />
  </div>
  <div className="block_inf">
    <div className="MainN">Type</div>
    <div className="ingChar">{selectedCharacter.type}</div>
    <hr />
  </div>
</div>
<p>hello</p>
<h1>{selectedCharacter.name}</h1>
</div>
);
});

export default ImgBlock;

