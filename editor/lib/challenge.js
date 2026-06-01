// public/challenge.js

export class Calculator {
  constructor() {
    this.name = "Super Calc";
  }

  // This method has a bug! It multiplies instead of adding
  add(a, b) {
    return a * b; 
  }
}


