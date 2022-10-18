abstract class Character {
  constructor(protected _name: string, protected _specialMoveName: string) { }

  abstract talk(): void;
  abstract specialMove(): void;
}

export default Character;
