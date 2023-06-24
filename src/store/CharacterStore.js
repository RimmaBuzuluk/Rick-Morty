import { makeAutoObservable } from "mobx";
import pic from "../component/_image_.png";

export default class CharacterStore {
  character = [
    {
      id: 1,
      name: "Rick Sanchez",
      img: "https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NjQ2NjMyODQ1OTQ0MTg2/rick-sanchez-character-analysis-not-a-nihilist-but-a-cynic.jpg",
      gender: "male",
      status: "alive",
      specie:"human",
      origin: "Eath",
      type: "main",
    },
    {
      id: 2,
      name: "Morty Smith",
      img: "https://pbs.twimg.com/profile_images/665939538183892992/za3U6kj6_400x400.jpg",
      gender: "male",
      status: "alive",
      specie:"human",
      origin: "Eath",
      type: "main",
    },
    {
      id: 3,
      name: "Samer Smit",
      img: "https://www.looper.com/img/gallery/how-rick-and-mortys-summer-changed-because-of-spencer-grammer-exclusive/l-intro-1605813748.jpg",
      gender: "female",
      status: "alive",
      specie:"human",
      origin: "Eath",
      type: "Supporting"
    },
    {
      id: 4,
      name: "Squanchy",
      img: "https://i1.sndcdn.com/avatars-000477286269-e698fm-t500x500.jpg",
      gender: "male",
      status: "unknown",
      specie:"squanch",
      origin: "unknown",
      type: "Supporting"
    },
    {
      id: 5,
      name: "Birdperson",
      img: "https://pm1.aminoapps.com/6471/3f595a428938815dd148e69317e6f006a3d1e14f_00.jpg",
      gender: "male",
      status: "alive",
      specie:"birdperson",
      origin: "unknown",
      type: "Supporting"

    },
    {
      id: 6,
      name: "Beth Smith",
      // name: "Arthricia",
      img: "https://i.ytimg.com/vi/e3vESrIhoxI/maxresdefault.jpg",
      gender: "female",
      status: "alive",
      specie:"human",
      origin: "Eath",
      type: "Supporting"
    },
    {
      id: 7,
      name: "Arthricia",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c7fc903-0816-4d7b-acd0-c4ec734c5fb1/db85yrf-363fd419-ed63-497d-a603-3a82a97c52ff.jpg/v1/fill/w_400,h_402,q_75,strp/arthricia_from_rick_and_morty_by_constantchange45_db85yrf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAyIiwicGF0aCI6IlwvZlwvOWM3ZmM5MDMtMDgxNi00ZDdiLWFjZDAtYzRlYzczNGM1ZmIxXC9kYjg1eXJmLTM2M2ZkNDE5LWVkNjMtNDk3ZC1hNjAzLTNhODJhOTdjNTJmZi5qcGciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.CxK2JdnySXZRqVhzp6LiD9QMA8ozyskx-EsnANaaEv0",
      gender: "female",
      status: "alive",
      specie:"Alien",
      origin: "gazorpazor",
      type: "Supporting"
    },
  ];
  selectedCharacterId = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCharacter(character) {
    this.character = character;
  }

  selectedCharacter(is){
    this.selectedCharacterId=is
  }

  getCharacterById() {
    return this.character.find((character) => character.id === this.selectedCharacterId);
  }
}

