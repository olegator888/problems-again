const countSeniors = (details) =>
  details.reduce((acc, cur) => {
    if (Number(cur.slice(11, 13)) > 60) {
      return acc + 1;
    }

    return acc;
  }, 0);
