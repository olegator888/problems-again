// total sam

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const nodes = [];
  while (head) {
    nodes.push(head.val);
    head = head.next;
  }

  for (let i = 0; i < nodes.length - k + 1; i += k) {
    let l = i;
    let r = i + k - 1;
    while (l <= r) {
      [nodes[l], nodes[r]] = [nodes[r], nodes[l]];
      l++;
      r--;
    }
  }

  const dummy = new ListNode();
  let cur = dummy;

  for (const node of nodes) {
    cur.next = new ListNode(node);
    cur = cur.next;
  }

  return dummy.next;
};
