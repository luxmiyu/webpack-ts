export default class Cat {
  constructor(public name: string) {}

  meow() {
    console.log(`${this.name} says meow!`);
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}
