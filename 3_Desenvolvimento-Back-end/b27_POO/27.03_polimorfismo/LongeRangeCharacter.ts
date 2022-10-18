import Character from "./Character";

class LongeRangeCharacter extends Character {
  constructor(name: string, specialMoveName: string, private _rangeAttackName: string) {
    super(name, specialMoveName);
  }

  talk(): void {
    console.log(this._name);
  }

  specialMove(): void {
    console.log(this._specialMoveName);
  }

  rangeAttack(): void {
    console.log(this._rangeAttackName);
  }
}

export default LongeRangeCharacter;
