class Heap {
  constructor({ heap, ev } = {}) {
    this.heap = [];
    if (heap) {
      for (const item of heap) {
        this.push(item);
      }
    }
    this.ev = ev || ((val) => val);
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  pop() {
    const val = this.heap[0];
    const last = this.heap.pop();
    if (this.size > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return val;
  }

  heapifyUp(i = this.size - 1) {
    if (i === 0) return;
    const p = Math.floor((i - 1) / 2);
    if (this.ev(this.heap[p]) > this.ev(this.heap[i])) {
      this.swap(i, p);
      this.heapifyUp(p);
    }
  }

  heapifyDown(i = 0) {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    if (left >= this.size) return;
    let smallest = left;
    if (
      right < this.size &&
      this.ev(this.heap[right]) < this.ev(this.heap[left])
    ) {
      smallest = right;
    }
    if (this.ev(this.heap[smallest]) < this.ev(this.heap[i])) {
      this.swap(i, smallest);
      this.heapifyDown(smallest);
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  get size() {
    return this.heap.length;
  }

  get top() {
    return this.heap[0];
  }
}

var MedianFinder = function () {
  this.left = new Heap({ ev: (val) => -1 * val });
  this.right = new Heap();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.left.push(num);

  if (this.left.top > this.right.top || this.left.size - this.right.size > 1) {
    this.right.push(this.left.pop());
  }
  if (this.right.size - this.left.size > 1) {
    this.left.push(this.right.pop());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.left.size > this.right.size) {
    return this.left.heap[0];
  }
  if (this.right.size > this.left.size) {
    return this.right.heap[0];
  }
  return (this.left.heap[0] + this.right.heap[0]) / 2;
};
