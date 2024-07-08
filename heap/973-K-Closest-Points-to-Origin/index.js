// total sam

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
    if (this.heap[p][0] > this.heap[i][0]) {
      this.swap(p, i);
      this.heapifyUp(p);
    }
  }

  heapifyDown(i = 0) {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    if (left >= this.size) return;
    let smallest = left;
    if (right < this.size && this.heap[right][0] < this.heap[left][0]) {
      smallest = right;
    }
    if (this.heap[smallest][0] < this.heap[i][0]) {
      this.swap(smallest, i);
      this.heapifyDown(smallest);
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  get size() {
    return this.heap.length;
  }
}

var kClosest = function (points, k) {
  points = new Heap(points.map(([x, y]) => [Math.sqrt(x * x + y * y), x, y]));
  res = [];
  while (k) {
    const [_, x, y] = points.pop();
    res.push([x, y]);
    k--;
  }
  return res;
};
