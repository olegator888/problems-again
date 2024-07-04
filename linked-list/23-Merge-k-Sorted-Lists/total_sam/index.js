// total sam

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const nodes = [];
  for (let list of lists) {
    while (list) {
      nodes.push(list.val);
      list = list.next;
    }
  }
  const dummy = new ListNode();
  let cur = dummy;
  nodes.sort((a, b) => a - b);
  for (const node of nodes) {
    cur.next = new ListNode(node);
    cur = cur.next;
  }
  return dummy.next;
};
