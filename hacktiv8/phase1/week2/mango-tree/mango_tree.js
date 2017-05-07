"use strict"

class FruitTree {
  constructor(param) {
    this._age = 0;
    if(param.hasOwnProperty("age")) {
      this._age = param["age"];
    }

    this._height = 0;
    if(param.hasOwnProperty("height")) {
      this._height = param["height"];
    }

    this._fruits = [];
    if(param.hasOwnProperty("fruits")) {
      let num_fruits = param["fruits"];
      this.produceFruitsArgs(num_fruits);
    }

    this._harvested = 0;

    this._healthy = true;
    if(param.hasOwnProperty("healthy")) {
      this._healthy = param["healthy"];
    }

    this._maxAge = 20;

    this._maxFruits = 50;
    if(param.hasOwnProperty("maxFruits")) {
      this._maxFruits = param["maxFruits"];
    }

    this._fruitName = "Unknown";
    if(param.hasOwnProperty("fruitName")) {
      this._fruitName = param["fruitName"];
    }

    this._good = 0;
    this._bad = 0;
  }

  getAge() {
    return this._age;
  }

  getHeight() {
    return this._height;
  }

  getFruits() {
    return this._fruits;
  }

  getHealthyStatus() {
    return this._healthy;
  }

  grow() {
    this._age++;

    if (this._age < 20) {
      this._height += Math.round(random() / 12);
      return this._healthy = true;
    } else {
      return this._healthy = false;
    }
  }

  // Produce some fruits
  produceFruits() {
    let buah = random() + 30;
    let totalBuah = (buah > this._maxFruits) ? this._maxFruits : buah;

    for (let i = 0; i < totalBuah; i++) {
      let fruit = new Fruit();

      if (fruit.quality == "good") {
        this._good++;
      } else {
        this._bad++;
      }

      this._fruits.push(fruit);
    }
  }

  produceFruitsArgs(totalBuah) {
    for (let i = 0; i < totalBuah; i++) {
      let fruit = new Fruit();

      if (fruit.quality == "good") {
        this._good++;
      } else {
        this._bad++;
      }

      this._fruits.push(fruit);
    }

  }

  // Get some fruits
  harvest() {
    this._harvested = `${this._fruits.length} (${this._good} good, ${this._bad} bad)`;
    this._fruits = [];
    this._bad = 0;
    this._good = 0
  }

}

class Fruit {
  constructor() {
    this.quality = (random() % 2 == 0) ? "good" : "bad";
  }
}

function random() {
  return Math.floor(Math.random() * 20);
}

// Mangga
class MangoTree extends FruitTree {
  constructor(param) {
    super(param);
  }
}

class Mango extends Fruit{
  constructor() {
    super();
  }
}

let mangoTree = new MangoTree({fruitName: "Mango"});
console.log(`The ${mangoTree._fruitName} tree is alive! :smile:`);

do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | ${mangoTree._fruitName}s harvested = ${mangoTree._harvested}`);
} while (mangoTree.getHealthyStatus() != false)

console.log(`The ${mangoTree._fruitName} tree has met its end. :sad:\n`);

// Apel
class AppleTree extends FruitTree {
  constructor(param) {
    super(param);
  }
}

class Apple extends Fruit{
  constructor() {
    super();
  }
}

let appleTree = new AppleTree({fruitName: "Apple"});
console.log(`The ${appleTree._fruitName} tree is alive! :smile:`);

do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | ${appleTree._fruitName}s harvested = ${appleTree._harvested}`);
} while (appleTree.getHealthyStatus() != false)

console.log(`The ${appleTree._fruitName} tree has met its end. :sad:\n`);

// Pear
class PearTree extends FruitTree {
  constructor(param) {
    super(param);
  }
}

class Pear extends Fruit{
  constructor() {
    super();
  }
}

let pearTree = new PearTree({fruitName: "Pear"});
console.log(`The ${pearTree._fruitName} tree is alive! :smile:`);

do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height} m | ${pearTree._fruitName}s harvested = ${pearTree._harvested}`);
} while (pearTree.getHealthyStatus() != false)

console.log(`The ${pearTree._fruitName} tree has met its end. :sad:\n`);

// Grove
class TreeGrove {
  constructor() {
    this.trees = [];
  }

  inputTree(fruitName, age, height, fruits, healthy) {
    if (fruitName == "MangoTree"){
      let mangoTree = new MangoTree({fruitName: fruitName, age: age, height: height, fruits: fruits, healthy: healthy});
      this.trees.push(mangoTree);
    }
    if (fruitName == "AppleTree"){
      let appleTree = new AppleTree({fruitName: fruitName, age: age, height: height, fruits: fruits, healthy: healthy});
      this.trees.push(appleTree);
    }
    if (fruitName == "PearTree"){
      let pearTree = new PearTree({fruitName: fruitName, age: age, height: height, fruits: fruits, healthy: healthy});
      this.trees.push(pearTree);
    }
  }
  showAges() {
    for (let i = 0; i < this.trees.length; i++) {
      console.log(`${this.trees[i]._fruitName}, age: ${this.trees[i]._age} years old`)
    }
  }
  showTrees() {
    console.log("\nTree Kind:");
    for (let i = 0; i < this.trees.length; i++) {
      console.log(this.trees[i]._fruitName);
    }
  }
  matureTrees() {
    console.log("\nGrowing Tree:");
    for (let i = 0; i < this.trees.length; i++) {
      if (this.trees[i]._fruits.length > 0) {
        console.log(`${this.trees[i]._fruitName}, fruits: ${this.trees[i]._fruits.length}, height: ${this.trees[i]._height} m`);
      }
    }
  }
  deadTrees() {
    console.log("\nDead Tree:");
    for (let i = 0; i < this.trees.length; i++){
      if (this.trees[i]._healthy == false) {
        console.log(`{this.trees[i]._fruitName}`);
      } else {
        return console.log("No dead tree found!");
      }
    }
  }
  nextYear() {
    for (let i = 0; i < this.trees.length; i++){
      this.trees[i].grow();
    }
    console.log("Next year:");
  }
}

let grove = new TreeGrove();
grove.inputTree("MangoTree", 3, 1.8, 7, true);
grove.inputTree("MangoTree", 5, 2.4, 12, true);
grove.inputTree("AppleTree", 4, 1.2, 5, true);
grove.inputTree("PearTree", 7, 2, 15, true);
grove.nextYear();
grove.showAges();
grove.showTrees();
grove.matureTrees();
grove.deadTrees();
