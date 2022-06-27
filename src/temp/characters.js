import { Character } from "../helpers/character";

const skills1 = [
  {
    timer: 3,
    type: "hp-up",
    skill1: (selectedTarget) => {
      selectedTarget.hp += 10;
    },
  },
  {
    timer: 1,
    type: "hp-neutral",
    skill2: (selectedTarget) => {
      selectedTarget.statusDebuff = "stun";
      return { duration: 2, hp: 0 };
    },
  },
];

const skills2 = [
  {
    timer: 3,
    type: "hp-down",
    skill1: (selectedTarget) => {
      selectedTarget.hp -= 20;
    },
  },
  {
    timer: 2,
    type: "hp-down",
    skill2: (selectedTarget) => {
      selectedTarget.statusDebuff = "poison";
      return { duration: 3, hp: -3 };
    },
  },
];

const char1 = new Character(1, 100, 5, skills1, 10, 0);

export const dummyCharacters = [
  char1,
  new Character(2, 100, 6, skills2, 12, 0),
];
