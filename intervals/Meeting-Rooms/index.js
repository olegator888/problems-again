// total sam

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {boolean}
   */
  canAttendMeetings(intervals) {
    intervals.sort((a, b) => a.start - b.start);
    for (let i = 0; i < intervals.length; i++) {
      const item = intervals[i];
      if (i > 0 && item.start < intervals[i - 1].end) return false;
    }
    return true;
  }
}
