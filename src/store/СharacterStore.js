import { makeAutoObservable } from "mobx";
import pic from "../component/_image_.png";

export default class CharacterStore {
  constructor() {
    this._types = [
      { id: 1, name: "Human" },
      { id: 2, name: "Animal" },
      { id: 3, name: "fictional character" },
    ];
    // this._gender = [
    //   { id: 1, name: "man" },
    //   { id: 2, name: "woman" },
    //   { id: 3, name: "neuter gender" },
    // ];
    this._character = [
      {
        id: 1,
        name: "Rick",
        img: pic,
      },
      {
        id: 2,
        name: "Iphone 12 pro",
        price: 2500,
        rating: 5,
        img: pic,
      },
      {
        id: 3,
        name: "Iphone 12 pro",
        price: 2500,
        rating: 5,
        img: pic,
      },
      {
        id: 4,
        name: "Iphone 12 pro",
        price: 2500,
        rating: 5,
        img: pic,
      },
      {
        id: 5,
        name: "Iphone 12 pro",
        price: 2500,
        rating: 5,
        img: pic,
      },
      {
        id: 6,
        name: "Iphone 12 pro",
        price: 2500,
        rating: 5,
        img: pic,
      },
      {
        id: 7,
        name: "Iphone 12 pro",
        price: 2500,
        rating: 5,
        img: pic,
      },
    ];

    // this._selectedType = {};

    // this._selectedCharacter = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setCharacter(character) {
    this._character = character;
  }

  //   setSelectedCharacter(character) {
  //     this._selectedcharacter = character;
  //   }

  //   setSelectedType(type) {
  //     this._selectedType = type;
  //   }

  get types() {
    return this._types;
  }
  get character() {
    return this._character;
  }

  //   get selectedType() {
  //     return this._selectedType;
  //   }
  //   get SelectedCharacter() {
  //     return this._selectedCharacter;
  //   }
}
