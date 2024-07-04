/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
  head = head.next;
  let tail = haed;
  while (tail) {
    let cur = tail;
    while (cur.next.val !== 0) {
      tail.val += cur.next.val;
      cur = cur.next;
    }
    tail.next = cur.next.next;
    tail = tail.next;
  }

  return head;
};
