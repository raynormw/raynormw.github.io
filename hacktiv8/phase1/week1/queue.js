'use strict'

class Queue {
  constructor(max_size) {
    this.MAX_SIZE = max_size;
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  queueInsert(x) {
    return this.data.push(x);
  }

  queueRemove() {
    return this.data.shift();
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

  queueTop() {
    return this.first();
  }
}
