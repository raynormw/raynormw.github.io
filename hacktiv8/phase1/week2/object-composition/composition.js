"use strict"
const fs = require('fs')
let options = fs.readFileSync('cookies.txt', 'utf8').split("\n")


class Ingredient {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }
}

class Cookie {
  constructor(name) {
    this.name = name;
    this.status = "mentah";
    this.ingredients = [];
    this.getIngredients();
  }

  getIngredients() {
    let ingredients = fs.readFileSync('ingredients.txt', 'utf8').split("\n");
    for (let i = 0; i < ingredients.length; i++) {
      ingredients[i] = ingredients[i].split(" = ");
      ingredients[i][1] = ingredients[i][1].split(', ');
      let arr = [];

      for (let j = 0; j < ingredients[i][1].length; j++){
        ingredients[i][1][j] = ingredients[i][1][j].split(" : ");
        arr.push(new Ingredient(ingredients[i][1][j][1], ingredients[i][1][j][0]));
      }

      if (this.name === ingredients[i][0]) {
        this.ingredients = arr;
      }

    }
  }

  bake() {
    this.status = "selesai dimasak"
  }
}

class PeanutButter extends Cookie {
  constructor(name) {
    super(name)
    this.peanut_count = 100
  }
}

class ChocolateChip extends Cookie {
  constructor(name) {
    super(name)
    this.choc_chip_count = 200
  }
}

class OtherCookie extends Cookie {
  constructor(name) {
    super(name)
    this.other_count = 150
  }
}

class CookieFactory {
  static create(cookies) {
    let arr = [];
    for (let i = 0; i < cookies.length; i++) {
      if(cookies[i] === 'peanut butter') {
        arr.push(new PeanutButter(cookies[i]))
      } else if(cookies[i] === 'chocolate chip'){
        arr.push(new ChocolateChip(cookies[i]))
      } else {
        arr.push(new OtherCookie(cookies[i]))
      }
    }
    return arr;
  }

  static cookieRecommendation(day, arr){
    let sugarfree = arr;
    if (day === "tuesday") {

      for(let i = sugarfree.length-1; i >= 0; i--) {
        for(let j = 0; j < sugarfree[i].ingredients.length; j++) {
          if(sugarfree[i].ingredients[j].name === 'sugar') {
            sugarfree.splice(i,1);
            break;
          }
        }
      }

    }
    return sugarfree;
  }
}

//driver's code
let batch_of_cookies = CookieFactory.create(options);
console.log(JSON.stringify(batch_of_cookies, null, 2));
console.log("-------------------------------------");
console.log(batch_of_cookies[0]);
// console.log(batch_of_cookies[0].ingredients[1]);
// console.log(batch_of_cookies[0].ingredients[2]);
// console.log(batch_of_cookies[0].ingredients[3]);
// console.log(batch_of_cookies[0].ingredients[4]);
let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batch_of_cookies);
console.log("-------------------------------------");
console.log("sugar free cakes are :");

for(let i = 0; i < sugarFreeFoods.length; i++){
  console.log(sugarFreeFoods[i].name)
}
