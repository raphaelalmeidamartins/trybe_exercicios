import Character from "./Character";

class MeleeCharacter extends Character {
  talk(): void {
    console.log(this._name);
  }

  specialMove(): void {
    console.log(this._specialMoveName);
  }
}

export default MeleeCharacter;
