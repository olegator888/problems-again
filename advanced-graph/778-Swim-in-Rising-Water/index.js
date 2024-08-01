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

var swimInWater = function (grid) {
  const rows = grid.length,
    cols = grid[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const cell = (r, c) => `${r}_${c}`;
  const visit = new Set([cell(0, 0)]);
  const heap = new Heap({ heap: [[grid[0][0], 0, 0]], ev: (val) => val[0] });

  while (heap.size) {
    const [time, r, c] = heap.pop();
    if (r === rows - 1 && c === cols - 1) {
      return time;
    }
    for (const [dr, dc] of directions) {
      const row = r + dr,
        col = c + dc;
      if (
        row < 0 ||
        row === rows ||
        col < 0 ||
        col === cols ||
        visit.has(cell(row, col))
      ) {
        continue;
      }
      visit.add(cell(row, col));
      heap.push([Math.max(grid[row][col], time), row, col]);
    }
  }
};
