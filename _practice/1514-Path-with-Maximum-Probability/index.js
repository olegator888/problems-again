// total sam

class Heap {
  constructor({ heap, ev }) {
    this.heap = [];
    this.ev = ev || ((val) => val);

    if (heap) {
      heap.forEach((item) => this.push(item));
    }
  }

  push(item) {
    this.heap.push(item);
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

    if (this.ev(this.heap[i]) > this.ev(this.heap[smallest])) {
      this.swap(i, smallest);
      this.heapifyDown(smallest);
    }
  }

  heapifyUp(i = this.size - 1) {
    if (i === 0) return;
    const p = Math.floor((i - 1) / 2);
    if (this.ev(this.heap[i]) < this.ev(this.heap[p])) {
      this.swap(i, p);
      this.heapifyUp(p);
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  get size() {
    return this.heap.length;
  }
}

var maxProbability = function (n, edges, succProb, start_node, end_node) {
  const graph = {};
  for (let i = 0; i < edges.length; i++) {
    const [s, d] = edges[i];
    if (!graph[s]) graph[s] = [];
    if (!graph[d]) graph[d] = [];
    graph[s].push([d, succProb[i]]);
    graph[d].push([s, succProb[i]]);
  }

  const maxHeap = new Heap({
    heap: [[1, start_node]],
    ev: (val) => -1 * val[0],
  });
  const visit = new Set();

  while (maxHeap.size > 0) {
    const [prob, node] = maxHeap.pop();

    if (node === end_node) return prob;

    visit.add(node);

    if (graph[node]) {
      for (const [nei, neiProb] of graph[node]) {
        if (visit.has(nei)) continue;
        maxHeap.push([prob * neiProb, nei]);
      }
    }
  }

  return 0;
};
