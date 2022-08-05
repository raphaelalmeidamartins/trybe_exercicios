import Person from "./Person";
class Student extends Person {
  private _enrollment: string = '';

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);

    this._enrollment = this.generateEnrollment();
  }

  private generateEnrollment(): string {
    const randomString = Array(16)
      .map(() => Math.floor(Math.random() * 10))
      .join("");
    return `STU${randomString}`;
  }
}

export default Student;
