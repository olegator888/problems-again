// total sam

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

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const graph = {};
  for (let i = 0; i < points.length; i++) {
    const [xi, yi] = points[i];
    graph[i] = [];
    for (let j = 0; j < points.length; j++) {
      const [xj, yj] = points[j];
      graph[i].push([Math.abs(xi - xj) + Math.abs(yi - yj), j]);
    }
  }

  let res = 0;
  const heap = new Heap({ heap: [[0, 0]], ev: (val) => val[0] });
  const visit = new Set();
  while (heap.size) {
    const [dist, node] = heap.pop();
    if (visit.has(node)) continue;
    res += dist;
    visit.add(node);
    if (visit.size === points.length) return res;
    if (graph[node]) {
      for (const [nei_dist, nei] of graph[node]) {
        if (!visit.has(nei)) {
          heap.push([nei_dist, nei]);
        }
      }
    }
  }
};
