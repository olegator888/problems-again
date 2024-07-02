var TimeMap = function () {
  this.store = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.store[key]) this.store[key] = [];
  this.store[key].push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  let res = "";
  const values = this.store[key] || [];
  let l = 0;
  let r = values.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const [v, t] = values[m];
    if (t <= timestamp) {
      res = v;
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return res;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
