class Heap {
  constructor(heap) {
    this.heap = [];
    if (heap) {
      for (const item of heap) {
        this.push(item);
      }
    }
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
    if (this.heap[p] < this.heap[i]) {
      this.swap(p, i);
      this.heapifyUp(p);
    }
  }

  heapifyDown(i = 0) {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    if (left >= this.size) return;
    let biggest = left;
    if (right < this.size && this.heap[right] > this.heap[left]) {
      biggest = right;
    }
    if (this.heap[biggest] > this.heap[i]) {
      this.swap(biggest, i);
      this.heapifyDown(biggest);
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  get size() {
    return this.heap.length;
  }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones = new Heap(stones);

  while (stones.size > 1) {
    const new_stone = Math.abs(stones.pop() - stones.pop());
    if (new_stone) {
      stones.push(new_stone);
    }
  }

  return stones.size === 0 ? 0 : stones.heap[0];
};
