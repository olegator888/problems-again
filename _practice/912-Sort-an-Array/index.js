/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const mergeSort = (l, r) => {
    if (l >= r) return;

    const m = Math.floor((l + r) / 2);
    mergeSort(l, m);
    mergeSort(m + 1, r);
    merge(l, m, r);
  };

  const merge = (l, m, r) => {
    const leftPart = nums.slice(l, m + 1);
    const rightPart = nums.slice(m + 1, r + 1);
    const n1 = leftPart.length,
      n2 = rightPart.length;

    let i = 0,
      j = 0,
      idx = l;
    while (i < n1 && j < n2) {
      if (leftPart[i] <= rightPart[j]) {
        nums[idx] = leftPart[i];
        i++;
      } else {
        nums[idx] = rightPart[j];
        j++;
      }
      idx++;
    }

    while (i < n1) {
      nums[idx++] = leftPart[i++];
    }

    while (j < n2) {
      nums[idx++] = rightPart[j++];
    }
  };

  mergeSort(0, nums.length - 1);
  return nums;
};
