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
  constructor(team1, team2) {
    this.teamOne = team1;
    this.teamTwo = team2;
    this.turns = 1;
    this.moveQueue = new MoveQueue();
  }

  init() {
    while (
      this.teamOne.alivePlayers.length &&
      this.teamTwo.alivePlayers.length
    ) {
      console.log("turns", this.turns);
      console.log("player1 turn");
      for (let i = 0; i < this.teamOne.alivePlayers.length; i++) {
        this.doTurn(this.teamOne.alivePlayers[i], this.teamTwo);
      }
      console.log("player2 turn");
      for (let i = 0; i < this.teamTwo.alivePlayers.length; i++) {
        this.doTurn(this.teamTwo.alivePlayers[i], this.teamOne);
      }
      this.turns++;
    }
    console.log(this.teamOne, this.teamTwo);
  }

  queuePlayerSkills(currentPlayer) {
    for (let i = 0; i < currentPlayer.skills.length; i++) {
      if (this.turns % (currentPlayer.skills[i].timer + 1) === 0) {
        this.moveQueue.addMove(currentPlayer.skills[i]);
        console.log(currentPlayer.skills[i]);
      }
    }
  }

  /* Situationn of status debuff of originating character? */
  doTurn(currentPlayer, enemyTeam) {
    const targetIndex = Math.floor(
      Math.random() * enemyTeam.alivePlayers.length
    );
    const target = enemyTeam.alivePlayers[targetIndex];
    // this.queuePlayerSkills(currentPlayer);
    // if (currentPlayer.statusDebuff !== "stun") {
    //   if (!this.moveQueue.length) {
    //     Character.basicAttack(currentPlayer, target);
    //   } else {
    //     this.moveQueue.unqueueMove();
    //   }
    // }
    Character.basicAttack(currentPlayer, target);
    if (target.hp <= 0) {
      enemyTeam.deadPlayers.push(target);
      enemyTeam.alivePlayers.splice(targetIndex, 1);
    }
  }
}
