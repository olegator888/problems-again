class Heap {
  constructor({ heap, compare } = {}) {
    this.heap = [];
    if (heap) {
      for (const item of heap) {
        this.push(item);
      }
    }
    this.compare = compare || ((a, b) => a - b);
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
    if (this.compare(this.heap[i], this.heap[p]) < 0) {
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
      this.compare(this.heap[right], this.heap[left]) < 0
    ) {
      smallest = right;
    }
    if (this.compare(this.heap[smallest], this.heap[i]) < 0) {
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
}

var minInterval = function (intervals, queries) {
  queries = queries.map((q, i) => [q, i]).sort((a, b) => a[0] - b[0]);
  intervals.sort((a, b) => a[0] - b[0]);
  const minHeap = new Heap({
    compare: (a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      return a[0] - b[0];
    },
  });

  const res = Array(queries.length).fill(-1);
  let i = 0; // current interval pointer

  for (const [q, j] of queries) {
    while (i < intervals.length && intervals[i][0] <= q) {
      const [start, end] = intervals[i];
      minHeap.push([end - start + 1, end]);
      i++;
    }

    while (minHeap.size > 0 && minHeap.heap[0][1] < q) {
      minHeap.pop();
    }

    if (minHeap.size > 0) res[j] = minHeap.heap[0][0];
  }

  return res;
};
