export default class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
    this.stoned = false;
    this.attack = 100;
  }

  get stoned() {
    return this.stonedState;
  }

  set stoned(state) {
    if (state) {
      this.stonedState = true;
    }
  }

  get attack() {
    let attack = (this.attackValue - 10 * (this.distance - 1));
    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }
    return Math.round(attack);
  }

  set attack(value) {
    this.attackValue = value;
  }
}
