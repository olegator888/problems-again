class Heap {
  constructor({ heap, ev }) {
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

var Twitter = function () {
  this.time = 0;
  this.followMap = {};
  this.tweetMap = {};
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.tweetMap[userId]) this.tweetMap[userId] = [];
  this.tweetMap[userId].push([this.time, tweetId]);
  this.time += 1;
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const res = [];
  const heap = new Heap({ ev: (val) => -1 * val[0] });
  if (!this.followMap[userId]) this.followMap[userId] = new Set();
  this.followMap[userId].add(userId);

  /**
   go throught all the people that we are following
   get the top tweet of this person to our heap
   */

  this.followMap[userId].forEach((followeeId) => {
    if (!this.tweetMap[followeeId] || this.tweetMap[followeeId].length === 0)
      return;

    const index = this.tweetMap[followeeId].length - 1;
    const [time, tweetId] = this.tweetMap[followeeId][index];
    heap.push([time, tweetId, followeeId, index - 1]);
  });

  while (heap.size > 0 && res.length < 10) {
    let [_, tweetId, followeeId, index] = heap.pop();
    res.push(tweetId);
    if (index >= 0) {
      const [time, tweetId] = this.tweetMap[followeeId][index];
      heap.push([time, tweetId, followeeId, index - 1]);
    }
  }

  return res;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.followMap[followerId]) this.followMap[followerId] = new Set();
  this.followMap[followerId].add(followeeId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (this.followMap[followerId]) {
    this.followMap[followerId].delete(followeeId);
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
