class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  get name(): string {
    return this._name;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set name(name: string) {
    if (name.length < 4)
      throw new Error(
        "Invalid name: it needs to have at least three characters"
      );
    this._name = name;
  }

  set birthDate(birthDate: Date) {
    const now = new Date();

    if (birthDate > now)
      throw new Error("Invalid birth date: it cannot be in the future");

    const oldestBirthDateAllowed = new Date(
      `${now.getFullYear() - 120}/${now.getMonth()}/${now.getDate()}`
    );

    if (birthDate < oldestBirthDateAllowed)
      throw new Error(
        "Invalid birth date: the person needs to be less than 120 years old"
      );

    this._birthDate = birthDate;
  }
}

const raphael = new Person('Raphael', new Date('1994/09/08'));
const rupaul = new Person('RuPaul', new Date('1500/08/09'));

console.log(raphael.birthDate);
console.log(rupaul.birthDate); // Dispara erro porque a RuPaul tem mais de 120 anos

export default Person;
