// total sam

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
  if (!this.store[key]) return "";

  for (let i = this.store[key].length - 1; i > -1; i--) {
    const [value, time] = this.store[key][i];
    if (time <= timestamp) {
      return value;
    }
  }

  return "";
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
