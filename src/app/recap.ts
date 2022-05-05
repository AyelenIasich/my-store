import { NgIfContext } from "@angular/common";

const username: string | number = 'AyeIasich';

const sum = (a: number, b: number): number => {
  return a + b;
};

sum(1, 2);

class Person {
  private age: number;
  lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

const joaco = new Person(15, 'Iasich');

joaco.age
