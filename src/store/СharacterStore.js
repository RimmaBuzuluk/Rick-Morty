import { makeAutoObservable } from "mobx";
import pic from "../component/_image_.png";

export default class CharacterStore {
  constructor() {
    
    
    this._character = [
      {
        id: 1,
        name: "Rick Sanchez",
        img: pic,
        person: "Human",
      },
      {
        id: 2,
        name: "Morty Smit",
        person: "Human",
        img: pic,
      },
      {
        id: 3,
        name: "Sammer Smit",
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
        name: "Birdperon",
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
        name: "Arthicia",
        person: "Human",
        img: pic,
      },
    ];

    makeAutoObservable(this);
  }

 

  setCharacter(character) {
    this._character = character;
  }

 
  get character() {
    return this._character;
  }


}
