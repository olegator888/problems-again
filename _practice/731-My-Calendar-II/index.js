var MyCalendarTwo = function() {
    this.events = [];
    this.overlapRegions = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    for (const [s, e] of this.overlapRegions) {
      if (!(e <= start || end <= s)) return false;
    }

    for (const [s, e] of this.events) {
      if (!(e <= start || end <= s)) {
        this.overlapRegions.push([Math.max(s, start), Math.min(e, end)]);
      }
    }

    this.events.push([start, end]);
    return true
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */