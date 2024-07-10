var Twitter = function () {
  this.tweets = [];
  this.followMap = {};
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.tweets.push([tweetId, userId]);
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  if (!this.followMap[userId]) this.followMap[userId] = new Set();
  this.followMap[userId].add(userId);
  const res = [];
  let i = this.tweets.length - 1;

  while (res.length < 10 && i > -1) {
    const [tweetId, authorId] = this.tweets[i];
    if (this.followMap[userId].has(authorId)) {
      res.push(tweetId);
    }
    i -= 1;
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
