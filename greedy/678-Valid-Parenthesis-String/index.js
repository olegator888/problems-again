// total sam

var checkValidString = function (s) {
  let minOpen = 0,
    maxOpen = 0;

  for (const c of s) {
    if (c === "(") {
      minOpen += 1;
      maxOpen += 1;
    } else if (c === ")") {
      if (maxOpen === 0) {
        return false;
      }

      maxOpen -= 1;
      minOpen = Math.max(minOpen - 1, 0);
    } else {
      maxOpen += 1;
      minOpen = Math.max(minOpen - 1, 0);
    }
  }

  return minOpen === 0;
};
