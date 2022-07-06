import { Character } from "../helpers/character";

class Team {
  constructor(team) {
    this.team = [...team];
    this.alivePlayers = [...team];
    this.deadPlayers = [];
  }
}

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
const char2 = new Character(2, 92, 6, skills2, 12, 0);
const char3 = new Character(3, 120, 6, skills1, 5, 0);
const char4 = new Character(4, 85, 6, skills2, 20, 0);
const char5 = new Character(5, 71, 6, skills2, 9, 0);
const char6 = new Character(6, 105, 6, skills2, 13, 0);
const char7 = new Character(7, 50, 6, skills2, 15, 0);
const char8 = new Character(8, 98, 6, skills2, 9, 0);
const char9 = new Character(9, 110, 6, skills2, 7, 0);
const char10 = new Character(10, 72, 6, skills2, 10, 0);

export const dummyTeam = [
  new Team([char1, char4, char5, char6, char7]),
  new Team([char2, char3, char8, char9, char10]),
];
