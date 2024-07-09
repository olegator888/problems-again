class Heap {
  constructor(heap) {
    this.heap = [];
    for (const item of heap) {
      this.push(item);
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
    if (this.heap[i] > this.heap[p]) {
      this.swap(i, p);
      this.heapifyUp(p);
    }
  }

  heapifyDown(i = 0) {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    let biggest = left;
    if (left >= this.size) return;
    if (right < this.size && this.heap[right] > this.heap[left]) {
      biggest = right;
    }
    if (this.heap[biggest] > this.heap[i]) {
      this.swap(i, biggest);
      this.heapifyDown(biggest);
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

var leastInterval = function (tasks, n) {
  const cnt = {};
  for (const task of tasks) {
    cnt[task] = (cnt[task] || 0) + 1;
  }
  const heap = new Heap(Object.values(cnt));
  const q = [];
  let time = 0;

  while (heap.size || q.length) {
    time += 1;

    if (!heap.size) {
      time = q[0][1];
    } else {
      const count = heap.pop() - 1;
      if (count) {
        q.push([count, time + n]);
      }
    }
    if (q.length > 0 && q[0][1] === time) {
      heap.push(q.shift()[0]);
    }
  }

  return time;
};
