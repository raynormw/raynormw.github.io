'use strict'

// Your code implementation
class Stack {
  constructor(max_size) {
    this.MAX_SIZE = max_size;
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  stackPush(x) {
    return this.data.push(x);
  }

  stackPop() {
    return this.data.pop();
  }

  first() {
    return this.data[0];
  }

  last() {
    return this.data[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0 ? true : false;
  }

  isFull() {
    return this.size() === this.MAX_SIZE ? true : false;
  }

  stackPeep() {
    return this.first();
  }
}

let myStack = new Stack;
console.log(typeof myStack);
console.log(myStack.isEmpty());

myStack.stackPush("JavaScript");
myStack.stackPush("is just so");
myStack.stackPush("cool");
console.log(myStack.size());

myStack.stackPush(15);
console.log(myStack.last());

myStack.stackPop();
myStack.stackPop();
myStack.stackPop();
myStack.stackPop();
console.log(myStack.isEmpty());

module.exports = Stack
