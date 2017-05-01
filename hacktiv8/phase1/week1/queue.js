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

let myQueue = new Queue;
console.log(typeof myQueue);
console.log(myQueue.isEmpty());

myQueue.queueInsert("JavaScript");
myQueue.queueInsert("is just so");
myQueue.queueInsert("cool");
console.log(myQueue.size());

myQueue.queueInsert(15);
console.log(myQueue.last());

myQueue.queueRemove();
myQueue.queueRemove();
myQueue.queueRemove();
myQueue.queueRemove();
console.log(myQueue.isEmpty());
