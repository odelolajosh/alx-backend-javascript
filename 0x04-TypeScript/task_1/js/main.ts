export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

export interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClass;
}

export interface IStudent {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements IStudent {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}

const makeStudent = (factory: StudentClassConstructor, firstName: string, lastName: string) => {
  return new factory(firstName, lastName);
}

const student = makeStudent(StudentClass, 'John', 'Doe');
console.log(student.workOnHomework()); // Currently working
