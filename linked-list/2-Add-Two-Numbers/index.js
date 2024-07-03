/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode();
  let cur = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const l1val = l1 ? l1.val : 0;
    const l2val = l2 ? l2.val : 0;
    let val = l1val + l2val + carry;
    carry = Math.floor(val / 10);
    val = val % 10;
    cur.next = new ListNode(val);

    cur = cur.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next;
};
