// sam

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
}

var networkDelayTime = function (times, n, k) {
  const graph = {};
  for (const [u, v, w] of times) {
    if (!graph[u]) graph[u] = [];
    graph[u].push([w, v]);
  }

  const heap = new Heap({ heap: [[0, k]], ev: (val) => val[0] });
  const visit = new Set();

  let res = 0;

  while (heap.size) {
    const [time, node] = heap.pop();
    if (visit.has(node)) continue;
    visit.add(node);
    res = time;
    if (graph[node]) {
      for (const [nei_time, nei] of graph[node]) {
        if (!visit.has(nei)) {
          heap.push([time + nei_time, nei]);
        }
      }
    }
  }

  return visit.size === n ? res : -1;
};
