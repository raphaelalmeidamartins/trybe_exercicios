"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
    }
    get name() {
        return this._name;
    }
    get birthDate() {
        return this._birthDate;
    }
    set name(name) {
        if (name.length < 4)
            throw new Error("Invalid name: it needs to have at least three characters");
        this._name = name;
    }
    set birthDate(birthDate) {
        const now = new Date();
        if (birthDate > now)
            throw new Error("Invalid birth date: it cannot be in the future");
        const oldestBirthDateAllowed = new Date(`${now.getFullYear() - 120}/${now.getMonth()}/${now.getDate()}`);
        if (birthDate < oldestBirthDateAllowed)
            throw new Error("Invalid birth date: the person needs to be less than 120 years old");
        this._birthDate = birthDate;
    }
}
const raphael = new Person('Raphael', new Date('1994/09/08'));
const madonna = new Person('Madonna', new Date('1500/08/09'));

exports.default = Person;
