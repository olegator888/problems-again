/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
  let prev = head.val;
  let i = 1;
  let first = 0;
  let last = 0;
  let minDist = Infinity;
  head = head.next;

  while (head && head.next) {
    if (
      (prev < head.val && head.val > head.next.val) ||
      (prev > head.val && head.val < head.next.val)
    ) {
      if (!first) first = i;
      minDist = first && last ? Math.min(minDist, i - last) : minDist;
      last = i;
    }
    i++;
    prev = head.val;
    head = head.next;
  }

  if (!first || !last || first === last) return [-1, -1];

  return [minDist, last - first];
};
