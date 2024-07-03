//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const add = (a, b) => {
  const longest = Math.max(a.length, b.length);
  while (a.length < longest) {
    a = "0" + a;
  }
  while (b.length < longest) {
    b = "0" + b;
  }
  let carry = 0;
  let res = "";

  for (let i = longest - 1; i > -1; i--) {
    const val = +a[i] + +b[i] + carry;
    const moded = val % 10;
    carry = Math.floor(val / 10);
    res = String(moded) + res;
  }

  if (carry) {
    res = String(carry) + res;
  }

  return res.split("").reverse().join("");
};

var addTwoNumbers = function (l1, l2) {
  let num1 = "";
  while (l1) {
    num1 = l1.val + num1;
    l1 = l1.next;
  }

  let num2 = "";
  while (l2) {
    num2 = l2.val + num2;
    l2 = l2.next;
  }

  const sum = add(num1, num2);

  let res = new ListNode();
  let cur = res;
  for (let i = 0; i < sum.length; i++) {
    cur.val = sum[i];
    cur.next = i < sum.length - 1 ? new ListNode() : null;
    cur = cur.next;
  }
  return res;
};
