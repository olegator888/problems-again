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
  let cur = head;
  const dummy = new ListNode();
  let tail = dummy;
  while (cur.next) {
    const node = new ListNode();
    while (cur.next.val !== 0) {
      node.val += cur.next.val;
      cur = cur.next;
    }

    tail.next = node;
    tail = tail.next;
    cur = cur.next;
  }

  return dummy.next;
};
