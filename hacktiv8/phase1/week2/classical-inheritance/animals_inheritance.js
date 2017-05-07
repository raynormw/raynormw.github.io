"use strict"

class Animal {
  constructor(num_legs = 2, is_warm_blooded = true) {
    this.num_legs = num_legs;
    this.is_warm_blooded = is_warm_blooded;
  }
}

class SuperPower {
  constructor() {

  }

  use_laser_vision() {
    console.log("Zzzzzzzzzzzzzz----->>>>");
  }

  be_invisible() {
    console.log("Puff,, You can't see me..");
  }
}

class Frog extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
    this.superPower = new SuperPower();
  }
}

class Bat extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
    this.superPower = new SuperPower();
  }
}

class Chimpanzee extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
    this.superPower = new SuperPower();
  }
}

class Fox extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
    this.superPower = new SuperPower();
  }
}

class Chicken extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
    this.superPower = new SuperPower();
  }
}

let hewan = new Animal();
console.log(hewan.num_legs); // 2
console.log("\n");

let ayamJago = new Chicken();
console.log(ayamJago.num_legs); // 2
console.log(ayamJago.is_warm_blooded); // true
console.log("\n");

let kodok = new Frog(4, false);
console.log(kodok.num_legs); // 4
console.log(kodok.is_warm_blooded); // false
console.log("\n");

let grayFox = new Fox(4, true);
console.log(grayFox.num_legs); // 4
console.log(grayFox.is_warm_blooded); // true
grayFox.superPower.use_laser_vision(); // Laser
console.log("\n");

let kalong = new Bat();
kalong.superPower.be_invisible(); // Puff,, You can't see me..
console.log("\n");

let orangUtan = new Chimpanzee(2, true);
console.log(orangUtan.num_legs); // 2
console.log(orangUtan.is_warm_blooded); // true
orangUtan.superPower.use_laser_vision(); // Laser
orangUtan.superPower.be_invisible(); // Puff,, You can't see me..
