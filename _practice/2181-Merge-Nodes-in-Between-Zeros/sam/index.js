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
  const nodes = [];
  let cur = 0;
  while (head) {
    if (head.val === 0) {
      if (cur > 0) {
        nodes.push(cur);
      }
      cur = 0;
    }
    cur += head.val;
    head = head.next;
  }

  const dummy = new ListNode();
  cur = dummy;
  for (const val of nodes) {
    cur.next = new ListNode(val);
    cur = cur.next;
  }
  return dummy.next;
};
