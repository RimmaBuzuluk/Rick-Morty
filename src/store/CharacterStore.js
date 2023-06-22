import { makeAutoObservable } from "mobx";
import pic from "../component/_image_.png";

export default class CharacterStore {
  character = [
    {
      id: 1,
      name: "Rick Sanchez",
      img: pic,
      person: "Human",
    },
    {
      id: 2,
      name: "Morty Smith",
      person: "Human",
      img: pic,
    },
    {
      id: 3,
      name: "Summer Smith",
      person: "Human",
      img: pic,
    },
    {
      id: 4,
      name: "Squanchy",
      person: "Human",
      img: pic,
    },
    {
      id: 5,
      name: "Birdperson",
      person: "Human",
      img: pic,
    },
    {
      id: 6,
      name: "Beth Smith",
      person: "Human",
      img: pic,
    },
    {
      id: 7,
      name: "Arthricia",
      person: "Human",
      img: pic,
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

