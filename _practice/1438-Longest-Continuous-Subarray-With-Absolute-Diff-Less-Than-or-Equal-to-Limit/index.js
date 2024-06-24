class Heap {
  constructor(evaluate) {
    this.heap = [];
    this.evaluate = evaluate || ((val) => val);
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  pop() {
    const val = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    return val;
  }

  heapifyUp(index) {
    const i = index || this.heap.length - 1;
    if (i === 0) return;
    const p = Math.floor((i - 1) / 2);
    if (this.evaluate(this.heap[p]) > this.evaluate(this.heap[i])) {
      this.swap(i, p);
      this.heapifyUp(p);
    }
  }

  heapifyDown(index) {
    const i = index || 0;
    const left = i * 2 + 1;
    if (left >= this.heap.length) return;
    const right = i * 2 + 2;
    let smallest = left;
    if (
      right < this.heap.length &&
      this.evaluate(this.heap[right]) < this.evaluate(this.heap[left])
    ) {
      smallest = right;
    }
    if (this.evaluate(this.heap[smallest]) < this.evaluate(this.heap[i])) {
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
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  let longest = 0;
  const minH = new Heap();
  const maxH = new Heap((val) => -val);
  let l = 0;
  const count = {};

  for (let r = 0; r < nums.length; r++) {
    minH.push(nums[r]);
    maxH.push(nums[r]);
    count[nums[r]] = (count[nums[r]] || 0) + 1;

    while (maxH.heap[0] - minH.heap[0] > limit) {
      count[nums[l]] -= 1;
      l += 1;
      while (!count[maxH.heap[0]]) {
        maxH.pop();
      }
      while (!count[minH.heap[0]]) {
        minH.pop();
      }
    }

    longest = Math.max(longest, r - l + 1);
  }

  return longest;
};
