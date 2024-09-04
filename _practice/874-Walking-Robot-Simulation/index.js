// total sam

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  const key = (x, y) => `${x}_${y}`;
  obstacles = new Set(obstacles.map((item) => key(...item)));
  const directions = ["n", "e", "s", "w"];

  const dirDelta = {
    n: [0, 1],
    e: [1, 0],
    s: [0, -1],
    w: [-1, 0],
  };

  const changeDir = (command) => {
    if (command === -2) direction -= 1;
    if (command === -1) direction += 1;
    if (direction === 4) direction = 0;
    if (direction === -1) direction = 3;
  };

  let direction = 0;
  let x = 0;
  let y = 0;

  let furthest = 0;

  for (const command of commands) {
    if (command === -1 || command === -2) {
      changeDir(command);
      continue;
    }

    const [dx, dy] = dirDelta[directions[direction]];

    for (let i = 0; i < command; i++) {
      x += dx;
      y += dy;
      if (obstacles.has(key(x, y))) {
        x -= dx;
        y -= dy;
        break;
      }
    }

    furthest = Math.max(furthest, x * x + y * y);
  }

  return furthest;
};
