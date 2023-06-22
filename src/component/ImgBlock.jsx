import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import CharacterStore from "../store/CharacterStore";

const ImgBlock = observer(() => {
  const { id } = useParams();
  const characterStore = new CharacterStore();
  const selectedCharacter = characterStore.character.find((person) => person.id === parseInt(id));;
  console.log(selectedCharacter)

  return (
    <div>
 <p>hello</p>
 <h1>{selectedCharacter.name}</h1>
    </div>
  );
});

export default ImgBlock;

