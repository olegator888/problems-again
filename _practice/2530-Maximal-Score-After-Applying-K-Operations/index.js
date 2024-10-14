// total sam

class Heap {
  constructor({ heap, compare } = {}) {
    this.heap = [];
    this.compare = compare || ((a, b) => a < b);

    if (heap) {
      for (const item of heap) {
        this.push(item);
      }
    }
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.size === 0) return null;
    const value = this.heap[0];
    const last = this.heap.pop();

    if (this.size > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return value;
  }

  heapifyUp(i = this.size - 1) {
    if (i === 0) return;

    const p = Math.floor((i - 1) / 2);

    if (this.compare(this.heap[i], this.heap[p])) {
      this.swap(i, p);
      this.heapifyUp(p);
    }
  }

  heapifyDown(i = 0) {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    if (left >= this.size) return;
    let smallest = left;
    if (right < this.size && this.compare(this.heap[right], this.heap[left])) {
      smallest = right;
    }
    if (this.compare(this.heap[smallest], this.heap[i])) {
      this.swap(smallest, i);
      this.heapifyDown(smallest);
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  get size() {
    return this.heap.length;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  const maxHeap = new Heap({ heap: nums, compare: (a, b) => a > b });

  let score = 0;

  while (k) {
    const largest = maxHeap.pop();
    score += largest;
    maxHeap.push(Math.ceil(largest / 3));
    k--;
  }

  return score;
};
