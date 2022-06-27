export class Character {
  constructor(id, hp, speed, skills, baseDamage, baseDefense) {
    this.id = id;
    this.hp = hp;
    this.speed = speed;
    this.skills = skills;
    this.baseDamage = baseDamage;
    this.baseDefense = baseDefense;
    this.statusDebuff = null;
  }

  static basicAttack(fromCharacter, selectedTarget) {
    console.log(
      `Attacking ${selectedTarget.id} for ${fromCharacter.baseDamage}`
    );
    selectedTarget.hp -= fromCharacter.baseDamage;
  }
}
