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

module.exports = Stack
