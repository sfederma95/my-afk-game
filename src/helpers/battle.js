import { Character } from "./character";

class MoveQueue {
  constructor() {
    this.queue = [];
    this.length = 0;
  }

  addMove(move) {
    this.queue.push(move);
    this.length++;
  }

  unqueueMove() {
    this.queue.shift();
    this.length--;
  }
}

export class Battles {
  constructor(combatants) {
    this.combatants = combatants;
    this.turns = 1;
    this.moveQueue = new MoveQueue();
  }

  init() {
    while (this.combatants[0].hp > 0 && this.combatants[1].hp > 0) {
      this.queueUpTurn();
      this.doTurn();
    }
    console.log(
      //   this.combatants.filter((character) => {
      //     return character.hp > 0;
      //   })
      this.combatants
    );
  }

  queueUpTurn() {
    for (let i = 0; i < this.combatants.length; i++) {
      // Based on turn should queue a skill if proc
      const targets = this.combatants.filter((other, index) => {
        return index !== i;
      });
      //   Should not queue basic attack if time for skill usage instead
      if (this.combatants[i].statusDebuff !== "stun") {
        // const skillsToQ = this.combatants[i].skills.filter((skill, index) => {
        //   return (
        //     this.turns % (this.combatants[i].skills[index].timer + 1) === 0
        //   );
        // });
        // console.log(skillsToQ);
        // if (skillsToQ) {
        //     this.moveQueue.addMove()
        // }
        this.moveQueue.addMove([
          Character.basicAttack,
          this.combatants[i],
          targets[0],
        ]);
      }
    }
  }

  /* Situationn of status debuff of originating character? */
  doTurn() {
    let index = 0;
    while (index < this.moveQueue.length) {
      const [move, originatingChar, target] = this.moveQueue.queue[index];
      if (originatingChar.statusDebuff !== "stun") {
        this.moveQueue.unqueueMove();
        move(originatingChar, target);
      } else index++;
      console.log("hp", target.hp);
    }
    this.turns++;
    console.log("turns", this.turns);
  }
}
