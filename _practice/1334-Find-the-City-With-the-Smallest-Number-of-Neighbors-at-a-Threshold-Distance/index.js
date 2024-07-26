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
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  const graph = {};
  for (const [v1, v2, dist] of edges) {
    if (!graph[v1]) graph[v1] = [];
    if (!graph[v2]) graph[v2] = [];
    graph[v1].push([v2, dist]);
    graph[v2].push([v1, dist]);
  }

  const dijkstra = (src) => {
    const heap = new Heap({ ev: (val) => val[0] });
    heap.push([0, src]);
    const visit = new Set();

    while (heap.size) {
      const [dist, node] = heap.pop();
      if (visit.has(node)) continue;
      visit.add(node);
      if (graph[node]) {
        for (const [nei, dist2] of graph[node]) {
          const nei_dist = dist + dist2;
          if (nei_dist <= distanceThreshold) {
            heap.push([nei_dist, nei]);
          }
        }
      }
    }

    return visit.size - 1;
  };

  let res = -1,
    minCount = n;
  for (let i = 0; i < n; i++) {
    const count = dijkstra(i);
    if (count <= minCount) {
      res = i;
      minCount = count;
    }
  }

  return res;
};
